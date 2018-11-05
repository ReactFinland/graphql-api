const _ = require("lodash");
const { makeExecutableSchema } = require("graphql-tools");
const conferences = require("./conferences");
const series = require("./conferenceSeries");
const enums = require("./enums");

function getConference(id) {
  if (conferences[id]) {
    return conferences[id].content;
  } else {
    throw new Error("Unknown conference");
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

const resolvers = {
  Query: {
    conference(root, { id }) {
      return getConference(id);
    },
    allConferences() {
      return Object.keys(conferences).map(id => conferences[id].content);
    },
    series(root, { id }) {
      if (series[id]) {
        return series[id];
      } else {
        throw new Error("Unknown conference");
      }
    },
    allSeries() {
      return Object.keys(series).map(id => series[id]);
    },
    contact(root, { contactName, conferenceId }) {
      const conference = getConference(conferenceId);

      return {
        conference,
        ...conference.contacts.find(({ name }) => name === contactName),
      };
    },
    schedule(root, { conferenceId, day }) {
      return getSchedule(conferenceId, day);
    },
  },
  Series: {
    conferences(series) {
      return series.conferences.map(
        conferenceId => conferences[conferenceId].content
      );
    },
  },
  Conference: {
    series(conference) {
      const id = conference.id;
      for (const seriesId of Object.keys(series)) {
        const oneSeries = series[seriesId];
        if (oneSeries.conferences.indexOf(id) !== -1) {
          return oneSeries;
        }
      }
    },
    locations(conference) {
      // Backwards compat
      if (conference._locations) {
        return conference._locations;
      } else {
        return conference.locations;
      }
    },
    organizers(conference) {
      return conference.contacts.filter(
        ({ type }) => type && type.includes(enums.ORGANIZER)
      );
    },
    partners(conference) {
      return conference.partners;
    },
    sponsors(conference) {
      return conference.sponsors;
    },
    goldSponsors(conference) {
      return conference.goldSponsors;
    },
    silverSponsors(conference) {
      return conference.silverSponsors;
    },
    bronzeSponsors(conference) {
      return conference.bronzeSponsors;
    },
    speakers(conference) {
      return conference.contacts
        .filter(
          ({ type }) =>
            (type && type.includes(enums.SPEAKER)) ||
            (type && type.includes(enums.WORKSHOP_HOST))
        )
        .map(contact => ({
          ...contact,
          conference,
        }));
    },
    talks(conference) {
      return conference.sessions.filter(
        ({ type }) =>
          type === enums.LIGHTNING_TALK ||
          type === enums.TALK ||
          type === enums.KEYNOTE
      );
    },
    workshops(conference) {
      return conference.sessions.filter(({ type }) => type === enums.WORKSHOP);
    },
  },
  Contact: {
    image(contact, args, { mediaUrl }) {
      return {
        url: `${mediaUrl}/${contact.image}`,
      };
    },
    aboutShort(contact) {
      if (contact.aboutShort) {
        return contact.aboutShort;
      } else {
        return contact.about ? contact.about.split(".")[0] + "." : "";
      }
    },
    social(contact) {
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
    },
    country(contact) {
      if (!contact.country && contact.location) {
        return contact.location.country;
      } else {
        return contact.country;
      }
    },
    city(contact) {
      if (!contact.city && contact.location) {
        return contact.location.city;
      } else {
        return contact.city;
      }
    },
    talks(contact) {
      // TODO: resolve.slideUrls(talks, schedules)
      return contact.conference.sessions.filter(
        ({ type, speakers }) =>
          (type === enums.LIGHTNING_TALK ||
            type === enums.TALK ||
            type === enums.KEYNOTE) &&
          speakers.find(({ name }) => name === contact.name)
      );
    },
    workshops(contact) {
      return contact.conference.sessions.filter(
        ({ type, speakers }) =>
          type === enums.WORKSHOP &&
          speakers.find(({ name }) => name === contact.name)
      );
    },
  },
  Location: {
    image(contact, args, { mediaUrl }) {
      return {
        url: `${mediaUrl}/${contact.image}`,
      };
    },
  },
  Interval: {
    sessions(interval) {
      return (interval.sessions || []).map(session => ({
        ...session,
        interval,
      }));
    },
  },
  // TODO Fix
  SessionType: _.pick(enums, [
    "TALK",
    "LIGHTNING_TALK",
    "KEYNOTE",
    "WORKSHOP",
    "BREAKFAST",
    "LUNCH",
    "COFFEE_BREAK",
    "ORGANIZATIONAL",
    "PANEL",
    "PARTY",
  ]),
  ContactType: _.pick(enums, [
    "SPEAKER",
    "TALK",
    "LIGHTNING_TALK",
    "KEYNOTE",
    "WORKSHOP",
    "ORGANIZER",
  ]),
  Session: {
    __resolveType(session) {
      switch (session.type) {
        case enums.TALK:
        case enums.LIGHTNING_TALK:
        case enums.KEYNOTE:
        case enums.ORGANIZATIONAL:
        case enums.PANEL:
          return "Talk";
        case enums.WORKSHOP:
          return "Workshop";
        case enums.BREAKFAST:
        case enums.LUNCH:
        case enums.COFFEE_BREAK:
        case enums.PARTY:
          return "Break";
        default:
          return null;
      }
    },
  },
};

const typeDefs = `
  type Query {
    conference(id: ID!): Conference
    allConferences: [Conference!]
    series(id: ID!): Series
    allSeries: [Series!]
    contact(conferenceId: ID!, contactName: String!): Contact
    schedule(conferenceId: ID!, day: String!): Schedule
  }

  type Series {
    id: ID!
    name: String!
    conferences: [Conference!]
  }

  type Conference {
    id: ID!
    name: String!
    year: String!
    websiteUrl: String!
    series: Series!
    locations: [Location]
    organizers: [Contact]
    partners: [Contact]
    sponsors: [Contact]
    goldSponsors: [Contact]
    silverSponsors: [Contact]
    bronzeSponsors: [Contact]
    schedules: [Schedule]
    speakers: [Contact]
    talks: [Talk]
    workshops: [Workshop]
    tickets: [Ticket]
  }

  type Schedule {
    day: String
    description: String
    intervals: [Interval]
  }

  type Interval {
    begin: String
    end: String
    sessions: [Session]
  }

  interface Session {
    type: SessionType!
    schedule: Schedule!
    interval: Interval!
    title: String!
    description: String
    keywords: [String]
    location: Location
  }

  enum SessionType {
    TALK
    LIGHTNING_TALK
    KEYNOTE
    WORKSHOP
    PANEL
    BREAKFAST
    LUNCH
    COFFEE_BREAK
    ORGANIZATIONAL
    PARTY
  }

  type Talk implements Session {
    type: SessionType!
    schedule: Schedule!
    interval: Interval!
    title: String!
    description: String
    keywords: [String]
    location: Location
    speakers: [Contact]
    urls: TalkUrls
  }

  type Workshop implements Session {
    type: SessionType!
    schedule: Schedule!
    interval: Interval!
    title: String!
    description: String
    keywords: [String]
    location: Location
    speakers: [Contact]
    tickets: [Ticket]
  }

  type Break implements Session {
    type: SessionType!
    schedule: Schedule!
    interval: Interval!
    title: String!
    description: String
    keywords: [String]
    location: Location
  }

  type TalkUrls {
    web: String
    slides: String
    video: String
  }

  enum ContactType {
    SPEAKER
    TALK
    LIGHTNING_TALK
    KEYNOTE
    WORKSHOP
    ORGANIZER
  }

  type Contact {
    name: String!
    about: String!
    aboutShort: String!
    image: Image
    type: [String]
    social: Social
    keywords: [String]
    talks: [Talk]
    workshops: [Workshop]
    country: Country
    city: String
  }

  type Social {
    homepage: String
    twitter: String
    github: String
    facebook: String
    medium: String
    instagram: String
    linkedin: String
    youtube: String
    vk: String
  }

  type Location {
    name: String!
    about: String!
    image: Image
    country: Country
    city: String
    address: String
    social: Social
  }

  type Country {
    name: String
    code: String
  }

  type Ticket {
    name: String!
    amount: Int!
    currency: String!
    link: String
  }

  type Image {
    url: String!
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
