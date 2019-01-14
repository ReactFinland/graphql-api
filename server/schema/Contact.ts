import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  ObjectType,
  Query,
  registerEnumType,
  Resolver,
  Root,
} from "type-graphql";
import { getConference, getSpeakers } from "./Conference";
import { IContext } from "./Context";
import { Country } from "./Country";
import { Image } from "./Image";
import { Talk, Workshop } from "./Session";
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
  public aboutShort!: string;

  @Field(_ => Image)
  public image?: Image;

  @Field(_ => [String])
  public type?: [string];

  @Field(_ => Social)
  public social!: Social;

  @Field(_ => [String])
  public keywords?: [string];

  @Field(_ => [Talk])
  public talks?: [Talk];

  @Field(_ => [Workshop])
  public workshops?: [Workshop];

  @Field(_ => Country)
  public country?: Country;

  @Field(_ => String)
  public city?: string;
}

@Resolver()
export class ContactResolver {
  @Query(_ => Contact)
  public contact(
    @Arg("contactName") contactName: string,
    @Arg("conferenceId") conferenceId: string
  ) {
    const conference = getConference(conferenceId);
    const sponsor = conference.sponsors.find(
      ({ name }) => name === contactName
    );
    const organizer = Object.values(conference.organizers).find(
      ({ name }) => name === contactName
    );
    const speaker = getSpeakers(conference.sessions).find(
      ({ name }) => name === contactName
    );
    const mc = getSpeakers(conference.mcs).find(
      ({ name }) => name === contactName
    );

    return {
      conference,
      ...(sponsor || organizer || speaker || mc),
    };
  }

  @FieldResolver(_ => Image)
  public image(@Root() contact: Contact, @Ctx() ctx: IContext) {
    return {
      url: `${ctx.mediaUrl}/${contact.image}`,
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
    const social = contact.social;
    const rules = {
      homepage: social.homepage,
      facebook: social.facebook && `https://facebook.com/${social.facebook}`,
      github: social.github && `https://github.com/${social.github}`,
      linkedin: social.linkedin && `https://linkedin.com/${social.linkedin}`,
      medium: social.medium && `https://medium.com/${social.medium}`,
      instagram:
        social.instagram && `https://instagram.com/${social.instagram}`,
      twitter: social.twitter && `https://twitter.com/${social.twitter}`,
      youtube: social.youtube && `https://www.youtube.com/${social.youtube}`,
      vk: social.vk && `https://vk.com/${social.vk}`,
    };
    const result = {};

    Object.keys(social).forEach(media => {
      if (rules[media]) {
        result[media] = rules[media];
      }
    });

    return result;
  }

  @FieldResolver(_ => Country)
  public country(@Root() contact: Contact) {
    return contact.country;
  }

  @FieldResolver(_ => String)
  public city(@Root() contact: Contact) {
    return contact.city;
  }

  // FIXME: See if these are still needed
  /*
  @FieldResolver(_ => [Talk])
  public talks(@Root() contact: Contact) {
    // TODO: resolve.slideUrls(talks, schedules)
    return contact.conference.sessions.filter(
      ({ type, speakers }) =>
        (type === SessionType.LIGHTNING_TALK ||
          type === SessionType.TALK ||
          type === SessionType.KEYNOTE) &&
        speakers.find(({ name }) => name === contact.name)
    );
  }

  @FieldResolver(_ => [Workshop])
  public workshops(@Root() contact: Contact) {
    return contact.conference.sessions.filter(
      ({ type, speakers }) =>
        type === SessionType.WORKSHOP &&
        speakers.find(({ name }) => name === contact.name)
    );
  }
  */
}
