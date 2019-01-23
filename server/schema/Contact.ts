import { flatMap, uniqBy } from "lodash";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  ID,
  ObjectType,
  Query,
  registerEnumType,
  Resolver,
  Root,
} from "type-graphql";
// import conferences from "../conferences";
import { Conference, getConference } from "./Conference";
import { IContext } from "./Context";
import { Country } from "./Country";
import { Image } from "./Image";
import Keyword from "./keywords";
import { Location } from "./Location";
import { Session } from "./Session";
import { Social } from "./Social";

export enum ContactType {
  SPEAKER,
  TALK,
  LIGHTNING_TALK,
  KEYNOTE,
  WORKSHOP,
  WORKSHOP_HOST,
  ORGANIZER,
}

registerEnumType(ContactType, {
  name: "ContactType",
  description: "Type of the contact",
});

@ObjectType()
export class Contact {
  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public about!: string;

  @Field(_ => String)
  public aboutShort?: string;

  @Field(_ => Image)
  public image!: Image;

  @Field(_ => [ContactType])
  public type?: ContactType[];

  @Field(_ => Social)
  public social!: Social;

  @Field(_ => [String])
  public keywords?: Keyword[];

  @Field(_ => Location)
  public location!: Location;

  // Derived at getSpeakers
  @Field(_ => [Session])
  public talks?: Session[];

  // Derived at getSpeakers
  @Field(_ => [Session])
  public workshops?: Session[];
}

@Resolver(_ => Contact)
export class ContactResolver {
  @Query(_ => Contact)
  public contact(
    @Arg("contactName") contactName: string,
    @Arg("conferenceId", _ => ID) conferenceId: string
  ) {
    const conference = getConference(conferenceId);
    const sponsor = conference.sponsors.find(
      ({ name }) => name === contactName
    );
    const organizer = Object.values(conference.organizers).find(
      ({ name }) => name === contactName
    );
    const speaker = getSpeakers(conference).find(
      ({ name }) => name === contactName
    );
    const mc =
      conference.mcs && conference.mcs.find(({ name }) => name === contactName);
    const contact = sponsor || organizer || speaker || mc;

    if (!contact) {
      throw new Error(`Contact ${contactName} wasn't found!`);
    }

    // FIXME: This contains all talks/workshops - likely we should filter based on conferenceId?
    return contact;
  }

  @FieldResolver(_ => Image)
  public image(@Root() contact: Contact, @Ctx() ctx: IContext) {
    return {
      url: `${ctx.mediaUrl}/${contact.image.url}`,
    };
  }

  @FieldResolver(_ => String)
  public aboutShort(@Root() contact: Contact) {
    if (contact.aboutShort) {
      return contact.aboutShort;
    } else {
      return contact.about ? contact.about.split(".")[0] + "." : "";
    }
  }

  @FieldResolver(_ => Social)
  public social(@Root() contact: Contact) {
    interface IRules {
      [key: string]: string | undefined;
    }
    const social = contact.social;
    const rules: IRules = {
      homepage: social.homepage,
      facebook: social.facebook && `https://facebook.com/${social.facebook}`,
      github: social.github && `https://github.com/${social.github}`,
      linkedin: resolveLinkedin(social.linkedin),
      medium: social.medium && `https:// medium.com/${social.medium}`,
      instagram:
        social.instagram && `https://instagram.com/${social.instagram}`,
      twitter: social.twitter && `https://twitter.com/${social.twitter}`,
      youtube: social.youtube && `https://www.youtube.com/${social.youtube}`,
      vk: social.vk && `https://vk.com/${social.vk}`,
    };
    const result: IRules = {};

    Object.keys(social).forEach(media => {
      if (rules[media]) {
        result[media] = rules[media];
      }
    });

    return result;
  }

  @FieldResolver(_ => Country, { deprecationReason: "Use `location` instead" })
  public country(@Root() contact: Contact) {
    return contact.location.country;
  }
}

function resolveLinkedin(linkedin?: string): string {
  if (!linkedin) {
    return "";
  }

  if (linkedin.startsWith("company")) {
    return `https://linkedin.com/${linkedin}`;
  }

  return `https://linkedin.com/in/${linkedin}`;
}

// TODO: Maybe this should check both talks/workshops at once?
export function getSpeakers(conference: Conference): Contact[] {
  const talkSpeakers = getSessionSpeakers(conference, conference.talks);
  const workshopSpeakers = getSessionSpeakers(conference, conference.workshops);

  return uniqBy(talkSpeakers.concat(workshopSpeakers), "name");
}

export function getSessionSpeakers(
  conference: Conference,
  sessions?: Session[]
): Contact[] {
  const speakers = uniqBy(
    flatMap(sessions, session => session.people || []),
    "name"
  );

  return speakers.map(speaker => ({
    ...speaker,
    talks: conference.talks.filter(
      ({ people }) =>
        people && people.find(person => person.name === speaker.name)
    ),
    workshops: conference.workshops.filter(
      ({ people }) =>
        people && people.find(person => person.name === speaker.name)
    ),
  }));
}
