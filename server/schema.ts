import { flatMap, get, uniq } from "lodash";
import {
  Arg,
  buildSchema,
  Ctx,
  Field,
  FieldResolver,
  ID,
  InterfaceType,
  ObjectType,
  Query,
  registerEnumType,
  Resolver,
  Root,
} from "type-graphql";
import conferences from "./conferences";
import series from "./conferenceSeries";

interface IContext {
  hostname: string;
  mediaUrl: string;
}

@ObjectType()
export class Series {
  @Field(_ => ID)
  public id!: string;

  @Field()
  public name!: string;

  @Field()
  public conferences!: [string];
}

@Resolver()
export class SeriesResolver {
  @Query(_ => Series)
  public series(@Arg("id") id: string) {
    if (series[id]) {
      return series[id];
    } else {
      throw new Error("Unknown conference");
    }
  }

  @Query(_ => [Series])
  public allSeries() {
    return Object.keys(series).map(id => series[id]);
  }

  @FieldResolver(_ => [Conference])
  public conferences(@Root() series: Series) {
    return series.conferences.map(conferenceId => conferences[conferenceId]);
  }
}

@ObjectType()
export class Conference {
  @Field(_ => ID)
  public id!: string;

  @Field()
  public name!: string;

  @Field()
  public year!: string;

  @Field()
  public websiteUrl!: string;

  @Field(_ => Series)
  public series!: Series;

  @Field(_ => [Location])
  public locations?: [Location];

  @Field(_ => [Contact])
  public organizers!: [Contact];

  @Field(_ => [Contact])
  public mcs?: [Contact];

  @Field(_ => [Contact])
  public partners?: [Contact];

  @Field(_ => [Contact])
  public sponsors!: [Contact];

  @Field(_ => [Contact])
  public goldSponsors?: [Contact];

  @Field(_ => [Contact])
  public silverSponsors?: [Contact];

  @Field(_ => [Contact])
  public bronzeSponsors?: [Contact];

  @Field(_ => [Schedule])
  public schedules!: [Schedule];

  @Field(_ => [ISession])
  public sessions!: [ISession];

  @Field(_ => [Contact])
  public speakers?: [Contact];

  @Field(_ => [Talk])
  public talks?: [Talk];

  @Field(_ => [Workshop])
  public workshops?: [Workshop];

  @Field(_ => [Ticket])
  public tickets?: [Ticket];
}

@Resolver()
export class ConferenceResolver {
  @Query(_ => Conference)
  public conference(@Arg("id") id: string) {
    return getConference(id);
  }

  @Query(_ => [Conference])
  public allConferences() {
    return Object.keys(conferences).map(id => conferences[id]);
  }

  @FieldResolver(_ => Series)
  public series(@Root() conference: Conference) {
    const id = conference.id;

    for (const seriesId of Object.keys(series)) {
      const oneSeries = series[seriesId];
      if (oneSeries.conferences.indexOf(id) !== -1) {
        return oneSeries;
      }
    }
  }

  @FieldResolver(_ => [Location])
  public locations(@Root() conference: Conference) {
    return conference.locations;
  }

  @FieldResolver(_ => [Contact])
  public organizers(@Root() conference: Conference) {
    return conference.organizers;
  }

  @FieldResolver(_ => [Contact])
  public mcs(@Root() conference: Conference) {
    return conference.mcs;
  }

  @FieldResolver(_ => [Contact])
  public partners(@Root() conference: Conference) {
    return conference.partners;
  }

  @FieldResolver(_ => [Contact])
  public sponsors(@Root() conference: Conference) {
    return conference.sponsors;
  }

  @FieldResolver(_ => [Contact])
  public goldSponsors(@Root() conference: Conference) {
    return conference.goldSponsors;
  }

  @FieldResolver(_ => [Contact])
  public silverSponsors(@Root() conference: Conference) {
    return conference.silverSponsors;
  }

  @FieldResolver(_ => [Contact])
  public bronzeSponsors(@Root() conference: Conference) {
    return conference.bronzeSponsors;
  }

  @FieldResolver(_ => [Contact])
  public speakers(@Root() conference: Conference) {
    return getSpeakers(conference.sessions).map(contact => ({
      ...contact,
      conference,
    }));
  }

  @FieldResolver(_ => [Talk])
  public talks(@Root() conference: Conference) {
    return conference.sessions.filter(
      ({ type }) =>
        type === SessionType.LIGHTNING_TALK ||
        type === SessionType.TALK ||
        type === SessionType.KEYNOTE
    );
  }

  @FieldResolver(_ => [Workshop])
  public workshops(@Root() conference: Conference) {
    return conference.sessions.filter(
      ({ type }) => type === SessionType.WORKSHOP
    );
  }
}

function getConference(id): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}

function getSpeakers(sessions) {
  return uniq(flatMap(sessions, session => get(session, "speakers")));
}

@ObjectType()
export class Schedule {
  @Field()
  public day?: string;

  @Field()
  public description?: string;

  @Field(_ => [Interval])
  public intervals?: [Interval];
}

@Resolver()
export class ScheduleResolver {
  @Query(_ => Schedule)
  public schedule(
    @Arg("conferenceId") conferenceId: string,
    @Arg("day") day: string
  ) {
    return getSchedule(conferenceId, day);
  }
}

function getSchedule(id, day) {
  const conference = getConference(id);
  const schedule = conference.schedules.find(c => c.day === day);

  if (schedule) {
    return schedule;
  } else {
    throw new Error("Invalid date");
  }
}

@ObjectType()
export class Interval {
  @Field()
  public begin?: string;

  @Field()
  public end?: string;

  @Field()
  public title?: string;

  @Field(_ => [ISession])
  public sessions!: [ISession];
}

@Resolver()
export class IntervalResolver {
  @FieldResolver(_ => [ISession])
  public sessions(@Root() interval: Interval) {
    return interval.sessions.map(session => ({
      ...session,
      interval,
    }));
  }
}

@InterfaceType()
abstract class ISession {
  @Field(_ => SessionType)
  public type!: SessionType;

  @Field(_ => Schedule)
  public schedule!: Schedule;

  @Field(_ => Interval)
  public interval!: Interval;

  @Field()
  public title!: string;

  @Field()
  public description?: string;

  @Field()
  public keywords?: [string];

  @Field(_ => Location)
  public location?: Location;
}

export enum SessionType {
  TALK,
  LIGHTNING_TALK,
  KEYNOTE,
  WORKSHOP,
  PANEL,
  BREAKFAST,
  LUNCH,
  COFFEE_BREAK,
  ORGANIZATIONAL,
  PARTY,
}

registerEnumType(SessionType, {
  name: "SessionType",
  description: "Type of the session",
});

// TODO: SessionType enum

@ObjectType({ implements: ISession })
export class Talk implements ISession {
  public type!: SessionType;
  public schedule!: Schedule;
  public interval!: Interval;
  public title!: string;
  public description?: string;
  public keywords?: [string];
  public location?: Location;

  @Field(_ => [Contact])
  public speakers?: [Contact];

  @Field(_ => TalkUrls)
  public urls?: TalkUrls;
}

@ObjectType({ implements: ISession })
export class Workshop implements ISession {
  public type!: SessionType;
  public schedule!: Schedule;
  public interval!: Interval;
  public title!: string;
  public description?: string;
  public keywords?: [string];
  public location?: Location;

  @Field(_ => [Contact])
  public speakers?: [Contact];

  @Field(_ => [Ticket])
  public tickets?: [Ticket];
}

@ObjectType({ implements: ISession })
export class Break implements ISession {
  public type!: SessionType;
  public schedule!: Schedule;
  public interval!: Interval;
  public title!: string;
  public description?: string;
  public keywords?: [string];
  public location?: Location;
}

@ObjectType()
export class TalkUrls {
  @Field()
  public web?: string;

  @Field()
  public slides?: string;

  @Field()
  public video?: string;
}

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
  @Field()
  public name!: string;

  @Field()
  public about!: string;

  @Field()
  public aboutShort!: string;

  @Field(_ => Image)
  public image?: Image;

  @Field()
  public type?: [string];

  @Field()
  public social!: Social;

  @Field()
  public keywords?: [string];

  @Field(_ => [Talk])
  public talks?: [Talk];

  @Field(_ => [Workshop])
  public workshops?: [Workshop];

  @Field(_ => Country)
  public country?: Country;

  @Field()
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

@ObjectType()
export class Social {
  @Field()
  public homepage?: string;

  @Field()
  public twitter?: string;

  @Field()
  public github?: string;

  @Field()
  public facebook?: string;

  @Field()
  public medium?: string;

  @Field()
  public instagram?: string;

  @Field()
  public linkedin?: string;

  @Field()
  public youtube?: string;

  @Field()
  public vk?: string;
}

@ObjectType()
export class Location {
  @Field()
  public name!: string;

  @Field()
  public about!: string;

  @Field(_ => Image)
  public image?: Image;

  @Field(_ => Country)
  public country?: Country;

  @Field()
  public city?: string;

  @Field()
  public address?: string;

  @Field(_ => Social)
  public social?: Social;
}

@Resolver()
export class LocationResolver {
  @FieldResolver(_ => Image)
  public image(@Root() location: Location, @Ctx() ctx: IContext) {
    return {
      url: `${ctx.mediaUrl}/${location.image}`,
    };
  }
}

@ObjectType()
export class Country {
  @Field()
  public name?: string;

  @Field()
  public code?: string;
}

@ObjectType()
export class Ticket {
  @Field()
  public name!: string;

  @Field()
  public amount!: string;

  @Field()
  public currency!: string;

  @Field()
  public link?: string;
}

@ObjectType()
export class Image {
  @Field()
  public url!: string;
}

export default async function generateSchema() {
  return await buildSchema({
    resolvers: [
      SeriesResolver,
      ConferenceResolver,
      ScheduleResolver,
      IntervalResolver,
      ContactResolver,
      LocationResolver,
    ],
  });
}
