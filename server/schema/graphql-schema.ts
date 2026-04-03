import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import conferences from "../conferences";
import { locations, people, sponsors } from "../../content/generated";
import { Conference, getConference } from "./Conference";
import { Contact, ContactType, getSessionSpeakers } from "./Contact";
import { IContext } from "./Context";
import Level from "./Level";
import { Location } from "./Location";
import { resolveSessions } from "./Schedule";
import { Session, SessionType } from "./Session";
import conferenceSeries from "./conference-series";

const ContactTypeEnum = createEnumType("ContactType", ContactType);
const SessionTypeEnum = createEnumType("SessionType", SessionType);
const LevelEnum = createEnumType("Level", Level);

const StyleType = new GraphQLObjectType({
  name: "Style",
  fields: {
    backgroundSize: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const ImageType = new GraphQLObjectType({
  name: "Image",
  fields: {
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    style: { type: StyleType },
  },
});

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: {
    name: { type: GraphQLString },
    code: { type: GraphQLString },
  },
});

const SocialType = new GraphQLObjectType({
  name: "Social",
  fields: {
    homepage: { type: GraphQLString },
    mastodon: { type: GraphQLString },
    bluesky: { type: GraphQLString },
    twitter: { type: GraphQLString },
    github: { type: GraphQLString },
    facebook: { type: GraphQLString },
    googleMaps: { type: GraphQLString },
    medium: { type: GraphQLString },
    instagram: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    youtube: { type: GraphQLString },
    vk: { type: GraphQLString },
    pinterest: { type: GraphQLString },
    vimeo: { type: GraphQLString },
    dribble: { type: GraphQLString },
    devto: { type: GraphQLString },
    tiktok: { type: GraphQLString },
    twitch: { type: GraphQLString },
  },
});

const LocationType = new GraphQLObjectType<Location, IContext>({
  name: "Location",
  fields: () => ({
    name: { type: GraphQLString },
    about: { type: GraphQLString },
    image: {
      type: ImageType,
      resolve(location, _args, ctx) {
        if (!location.image) {
          return null;
        }

        return {
          ...location.image,
          url: `${ctx.mediaUrl}/${location.image.url}`,
        };
      },
    },
    social: { type: SocialType },
    country: { type: CountryType },
    city: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

const SessionUrlsType = new GraphQLObjectType<Record<string, string>, IContext>({
  name: "SessionUrls",
  fields: {
    web: { type: GraphQLString },
    slides: { type: GraphQLString },
    video: { type: GraphQLString },
    demo: { type: GraphQLString },
    drawing: {
      type: GraphQLString,
      resolve(root, _args, ctx) {
        if (!root.drawing) {
          return null;
        }

        return `${ctx.mediaUrl}/${root.drawing}`;
      },
    },
  },
});

const IntervalType = new GraphQLObjectType({
  name: "Interval",
  fields: () => ({
    begin: { type: new GraphQLNonNull(GraphQLString) },
    end: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    sessions: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(SessionTypeObject))),
      resolve(interval: { sessions: Session[] }) {
        return interval.sessions.map((session) => ({
          ...session,
          interval,
        }));
      },
    },
    location: { type: LocationType },
    mc: { type: ContactObjectType },
    urls: { type: SessionUrlsType },
    drawing: { type: GraphQLString },
  }),
});

const ScheduleType = new GraphQLObjectType({
  name: "Schedule",
  fields: () => ({
    day: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: LocationType },
    description: { type: GraphQLString },
    intervals: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(IntervalType))),
    },
  }),
});

const SessionTypeObject = new GraphQLObjectType<Session, IContext>({
  name: "Session",
  fields: () => ({
    type: { type: new GraphQLNonNull(SessionTypeEnum) },
    level: { type: LevelEnum },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(session) {
        return session.title || "Mysterious talk";
      },
    },
    hasTitle: {
      type: GraphQLBoolean,
      resolve(session) {
        return Boolean(session.title);
      },
    },
    description: { type: GraphQLString },
    keywords: { type: new GraphQLList(GraphQLString) },
    location: { type: LocationType },
    people: { type: new GraphQLList(ContactObjectType) },
    speakers: {
      type: new GraphQLList(ContactObjectType),
      deprecationReason: "Use `people` instead",
      resolve(session) {
        return session.people || [];
      },
    },
    urls: { type: SessionUrlsType },
    sessions: { type: new GraphQLList(SessionTypeObject) },
    parent: { type: IntervalType },
    day: { type: GraphQLString },
    begin: { type: GraphQLString },
    end: { type: GraphQLString },
  }),
});

const ContactObjectType = new GraphQLObjectType<Contact, IContext>({
  name: "Contact",
  fields: () => ({
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(contact) {
        return contact.firstName || contact.name.split(" ")[0];
      },
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(contact) {
        return contact.lastName || contact.name.split(" ").slice(1).join(" ");
      },
    },
    name: { type: new GraphQLNonNull(GraphQLString) },
    about: { type: new GraphQLNonNull(GraphQLString) },
    aboutShort: {
      type: GraphQLString,
      resolve(contact) {
        if (contact.aboutShort) {
          return contact.aboutShort;
        }

        return contact.about ? `${contact.about.split(".")[0]}.` : "";
      },
    },
    company: { type: GraphQLString },
    tagline: { type: GraphQLString },
    image: {
      type: new GraphQLNonNull(ImageType),
      resolve(contact, _args, ctx) {
        if (!contact.image) {
          return { url: "" };
        }

        if (contact.image.url.startsWith("http")) {
          return contact.image;
        }

        return {
          ...contact.image,
          url: `${ctx.mediaUrl}/${contact.image.url}`,
        };
      },
    },
    type: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ContactTypeEnum))),
      resolve(contact) {
        return contact.type || [];
      },
    },
    social: {
      type: new GraphQLNonNull(SocialType),
      resolve(contact) {
        const social = contact.social;

        if (!social) {
          return {};
        }

        const rules: Record<string, string | undefined> = {
          homepage: social.homepage,
          mastodon: social.mastodon,
          bluesky: social.bluesky && `https://bsky.app/profile/${social.bluesky}`,
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
        const result: Record<string, string> = {};

        Object.keys(social).forEach((media) => {
          const value = rules[media];

          if (value) {
            result[media] = value;
          }
        });

        return result;
      },
    },
    keywords: { type: new GraphQLList(GraphQLString) },
    location: { type: new GraphQLNonNull(LocationType) },
    talks: { type: new GraphQLList(SessionTypeObject) },
    workshops: { type: new GraphQLList(SessionTypeObject) },
    noPhotography: { type: GraphQLBoolean },
    country: {
      type: CountryType,
      deprecationReason: "Use `location` instead",
      resolve(contact) {
        return contact.location.country;
      },
    },
  }),
});

const SeriesType = new GraphQLObjectType({
  name: "Series",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    conferences: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ConferenceType))),
      resolve(series: { name: string }) {
        return Object.values(conferences).filter(
          (conference) => series.name === conference.series
        );
      },
    },
  }),
});

const ColorsType = new GraphQLObjectType({
  name: "Colors",
  fields: {
    primary: { type: new GraphQLNonNull(GraphQLString) },
    secondary: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    background: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const FontType = new GraphQLObjectType({
  name: "Font",
  fields: {
    family: { type: GraphQLString },
    weight: { type: GraphQLString },
    style: { type: GraphQLString },
    fileName: { type: GraphQLString },
    formats: { type: new GraphQLList(GraphQLString) },
    href: { type: GraphQLString },
  },
});

const FontsType = new GraphQLObjectType({
  name: "Fonts",
  fields: {
    primary: { type: new GraphQLNonNull(GraphQLString) },
    secondary: { type: new GraphQLNonNull(GraphQLString) },
    variants: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FontType))) },
  },
});

const WithWithoutTextType = new GraphQLObjectType({
  name: "WithWithoutText",
  fields: {
    withoutText: { type: new GraphQLNonNull(ImageType) },
    withText: { type: new GraphQLNonNull(ImageType) },
  },
});

const LogosType = new GraphQLObjectType({
  name: "Logos",
  fields: {
    black: { type: new GraphQLNonNull(WithWithoutTextType) },
    colored: { type: new GraphQLNonNull(WithWithoutTextType) },
    white: { type: new GraphQLNonNull(WithWithoutTextType) },
  },
});

const ThemeType = new GraphQLObjectType({
  name: "Theme",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    fonts: { type: new GraphQLNonNull(FontsType) },
    textures: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ImageType))) },
    colors: { type: new GraphQLNonNull(ColorsType) },
    logos: { type: new GraphQLNonNull(LogosType) },
  },
});

const ConferenceType = new GraphQLObjectType<Conference, IContext>({
  name: "Conference",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    series: {
      type: SeriesType,
      resolve(conference) {
        for (const seriesId of Object.keys(conferenceSeries)) {
          const oneSeries = conferenceSeries[seriesId];

          if (oneSeries.conferences.includes(conference.id)) {
            return oneSeries;
          }
        }

        return null;
      },
    },
    name: { type: new GraphQLNonNull(GraphQLString) },
    organizer: { type: new GraphQLNonNull(ContactObjectType) },
    year: { type: new GraphQLNonNull(GraphQLString) },
    startDate: { type: new GraphQLNonNull(GraphQLString) },
    endDate: { type: new GraphQLNonNull(GraphQLString) },
    slogan: { type: new GraphQLNonNull(GraphQLString) },
    websiteUrl: { type: new GraphQLNonNull(GraphQLString) },
    locations: { type: new GraphQLList(LocationType) },
    organizers: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ContactObjectType))),
    },
    mcs: { type: new GraphQLList(ContactObjectType) },
    partners: { type: new GraphQLList(ContactObjectType) },
    sponsors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ContactObjectType))),
    },
    goldSponsors: { type: new GraphQLList(ContactObjectType) },
    silverSponsors: { type: new GraphQLList(ContactObjectType) },
    bronzeSponsors: { type: new GraphQLList(ContactObjectType) },
    platformSponsors: { type: new GraphQLList(ContactObjectType) },
    schedules: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ScheduleType))),
    },
    allSpeakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        const talks = resolveSessions(conference.schedules, [
          SessionType.TALK,
          SessionType.KEYNOTE,
          SessionType.LIGHTNING_TALK,
          SessionType.PANEL,
          SessionType.WORKSHOP,
        ]);

        return getSessionSpeakers(conference, talks);
      },
    },
    speakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        return getSessionSpeakers(
          conference,
          resolveSessions(conference.schedules, [SessionType.TALK])
        );
      },
    },
    keynotes: {
      type: new GraphQLList(SessionTypeObject),
      resolve(conference) {
        return resolveSessions(conference.schedules, [SessionType.KEYNOTE]);
      },
    },
    keynoteSpeakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        return getSessionSpeakers(
          conference,
          resolveSessions(conference.schedules, [SessionType.KEYNOTE])
        );
      },
    },
    fullTalks: {
      type: new GraphQLList(SessionTypeObject),
      resolve(conference) {
        return resolveSessions(conference.schedules, [SessionType.TALK]);
      },
    },
    fullTalkSpeakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        return getSessionSpeakers(
          conference,
          resolveSessions(conference.schedules, [SessionType.TALK])
        );
      },
    },
    lightningTalks: {
      type: new GraphQLList(SessionTypeObject),
      resolve(conference) {
        return resolveSessions(conference.schedules, [
          SessionType.LIGHTNING_TALK,
        ]);
      },
    },
    lightningTalkSpeakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        return getSessionSpeakers(
          conference,
          resolveSessions(conference.schedules, [SessionType.LIGHTNING_TALK])
        );
      },
    },
    panelOnlySpeakers: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        const talks = resolveSessions(conference.schedules, [SessionType.TALK]);
        const talkSpeakers = getSessionSpeakers(conference, talks);
        const panels = resolveSessions(conference.schedules, [SessionType.PANEL]);
        const panelSpeakers = getSessionSpeakers(conference, panels);

        return panelSpeakers.filter(
          (speaker) =>
            !talkSpeakers.map((talkSpeaker) => talkSpeaker.name).includes(speaker.name)
        );
      },
    },
    talks: {
      type: new GraphQLList(SessionTypeObject),
      deprecationReason:
        "Use `keynotes`,s `fullTalks` and `lightningTalks` instead",
      resolve(conference) {
        return resolveSessions(conference.schedules, [
          SessionType.LIGHTNING_TALK,
          SessionType.TALK,
          SessionType.KEYNOTE,
        ]);
      },
    },
    workshops: {
      type: new GraphQLList(SessionTypeObject),
      resolve(conference) {
        return resolveSessions(conference.schedules, [SessionType.WORKSHOP]);
      },
    },
    workshopInstructors: {
      type: new GraphQLList(ContactObjectType),
      resolve(conference) {
        return getSessionSpeakers(
          conference,
          resolveSessions(conference.schedules, [SessionType.WORKSHOP])
        );
      },
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    conference: {
      type: ConferenceType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_source, { id }: { id: string }) {
        return getConference(id);
      },
    },
    conferences: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ConferenceType))),
      resolve() {
        return Object.values(conferences);
      },
    },
    allConferences: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ConferenceType))),
      deprecationReason: "Use `conferences` instead",
      resolve() {
        return Object.values(conferences);
      },
    },
    series: {
      type: SeriesType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_source, { id }: { id: string }) {
        const match = conferenceSeries[id];

        if (!match) {
          throw new Error("Unknown conference");
        }

        return match;
      },
    },
    allSeries: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(SeriesType))),
      resolve() {
        return Object.values(conferenceSeries);
      },
    },
    interval: {
      type: IntervalType,
      args: {
        conferenceId: { type: new GraphQLNonNull(GraphQLID) },
        intervalTitle: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_source, args: { conferenceId: string; intervalTitle: string }) {
        const conference = getConference(args.conferenceId);
        let result: unknown;

        conference.schedules.forEach(({ intervals }) => {
          const found = intervals.find(({ title }) => title === args.intervalTitle);

          if (found) {
            result = found;
          }
        });

        return result ?? null;
      },
    },
    schedule: {
      type: ScheduleType,
      args: {
        conferenceId: { type: new GraphQLNonNull(GraphQLID) },
        day: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_source, args: { conferenceId: string; day: string }) {
        return getSchedule(args.conferenceId, args.day);
      },
    },
    theme: {
      type: ThemeType,
      args: {
        conferenceId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_source, { conferenceId }: { conferenceId: string }) {
        const series = conferenceSeries[conferenceId];

        if (!series) {
          throw new Error("Conference id did not match series");
        }

        return series.theme;
      },
    },
    themes: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ThemeType))),
      resolve() {
        return Object.values(conferenceSeries).map(({ theme }) => theme);
      },
    },
    contact: {
      type: ContactObjectType,
      args: {
        contactName: { type: new GraphQLNonNull(GraphQLString) },
        conferenceId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(
        _source,
        args: { contactName: string; conferenceId: string }
      ) {
        const conference = getConference(args.conferenceId);
        const sponsor = conference.sponsors.find(
          ({ name }) => name === args.contactName
        );
        const organizer = Object.values(conference.organizers).find(
          ({ name }) => name === args.contactName
        );
        const talks = resolveSessions(conference.schedules, [
          SessionType.LIGHTNING_TALK,
          SessionType.TALK,
          SessionType.KEYNOTE,
          SessionType.PANEL,
        ]);
        const speaker = getSessionSpeakers(conference, talks).find(
          ({ name }) => name === args.contactName
        );
        const workshops = resolveSessions(conference.schedules, [
          SessionType.WORKSHOP,
        ]);
        const workshopInstructor = getSessionSpeakers(conference, workshops).find(
          ({ name }) => name === args.contactName
        );
        const mc =
          conference.mcs &&
          conference.mcs.find(({ name }) => name === args.contactName);
        const contact =
          sponsor || organizer || speaker || workshopInstructor || mc;

        if (!contact) {
          throw new Error(`Contact ${args.contactName} wasn't found!`);
        }

        return contact;
      },
    },
    locations: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(LocationType))),
      resolve() {
        return Object.values(locations);
      },
    },
    people: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ContactObjectType))),
      resolve() {
        return Object.values(people);
      },
    },
    sponsors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ContactObjectType))),
      resolve() {
        return Object.values(sponsors);
      },
    },
  },
});

export default function generateSchema() {
  return new GraphQLSchema({
    query: QueryType,
  });
}

function createEnumType(name: string, values: Record<string, string>) {
  return new GraphQLEnumType({
    name,
    values: Object.fromEntries(
      Object.entries(values).map(([key, value]) => [
        key,
        {
          value,
        },
      ])
    ),
  });
}

function getSchedule(id: string, day: string) {
  const conference = getConference(id);
  const schedule = conference.schedules.find((entry) => entry.day === day);

  if (schedule) {
    return schedule;
  }

  throw new Error("Invalid date");
}

function resolveLinkedin(linkedin?: string) {
  if (!linkedin) {
    return "";
  }

  if (linkedin.startsWith("company")) {
    return `https://linkedin.com/${linkedin}`;
  }

  return `https://linkedin.com/in/${linkedin}`;
}
