import { flatMap } from "lodash";
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
import conferences from "../conferences";
import { getConference, getSpeakers } from "./Conference";
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
    const speaker =
      getSpeakers(conference.talks).find(({ name }) => name === contactName) ||
      getSpeakers(conference.workshops).find(
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

  @FieldResolver(_ => [Session])
  public talks(@Root() contact: Contact) {
    const talks = flatMap(conferences, ({ talks }) => talks);
    const talksWithContact = talks.filter(
      ({ people }) =>
        people && people.find(person => person.name === contact.name)
    );

    return talksWithContact;
  }

  @FieldResolver(_ => [Session])
  public workshops(@Root() contact: Contact) {
    const workshops = flatMap(conferences, ({ workshops }) => workshops);
    const workshopsWithContact = workshops.filter(
      ({ people }) =>
        people && people.find(person => person.name === contact.name)
    );

    return workshopsWithContact;
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
