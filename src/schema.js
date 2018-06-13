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
      return conference.contacts.filter(({ type }) =>
        type.includes(enums.ORGANIZER)
      );
    },
    partners(conference) {
      return conference.contacts.filter(({ type }) =>
        type.includes(enums.PARTNER)
      );
    },
    sponsors(conference) {
      return conference.contacts.filter(
        ({ type }) =>
          type.includes(enums.GOLD_SPONSOR) ||
          type.includes(enums.SILVER_SPONSOR) ||
          type.includes(enums.BRONZE_SPONSOR)
      );
    },
    goldSponsors(conference) {
      return conference.contacts.filter(({ type }) =>
        type.includes(enums.GOLD_SPONSOR)
      );
    },
    silverSponsors(conference) {
      return conference.contacts.filter(({ type }) =>
        type.includes(enums.SILVER_SPONSOR)
      );
    },
    bronzeSponsors(conference) {
      return conference.contacts.filter(({ type }) =>
        type.includes(enums.BRONZE_SPONSOR)
      );
    },
    speakers(conference) {
      return conference.contacts.filter(
        ({ type }) =>
          type.includes(enums.SPEAKER) || type.includes(enums.WORKSHOP_HOST)
      );
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
    social(contact) {
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
  },
  Location: {
    image(contact, args, { mediaUrl }) {
      return {
        url: `${mediaUrl}/${contact.image}`,
      };
    },
  },
  // TODO Fix
  SessionType: {
    KEYNOTE: "keynote",
    LIGHTNING_TALK: "lightningTalk",
    TALK: "talk",
    WORKSHOP: "workshop",
  },
  ContactType: {
    BRONZE_SPONSOR: "bronzeSponsor",
    GOLD_SPONSOR: "goldSponsor",
    ORGANIZER: "organizer",
    PARTNER: "partner",
    SILVER_SPONSOR: "silverSponsor",
    SPEAKER: "speaker",
    LIGHTNING_TALK: "lightningTalk",
    TALK: "talk",
    WORKSHOP: "workshop",
  },
  Session: {
    __resolveType(session) {
      switch (session.i) {
        case enums.TALK:
        case enums.LIGHTNING_TALK:
        case enums.KEYNOTE:
          return "Talk";
        case enums.WORKSHOP:
          return "Workshop";
        case enums.BREAKFAST:
        case enums.LUNCH:
        case COFFEE_BREAK:
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
    location: Contact
  }

  enum SessionType {
    TALK
    LIGHTNING_TALK
    KEYNOTE
    WORKSHOP
    BREAKFAST
    LUNCH
    COFFEE_BREAK
  }

  type Talk implements Session {
    type: SessionType!
    schedule: Schedule!
    interval: Interval!
    title: String!
    description: String
    keywords: [String]
    location: Contact
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
    location: Contact
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
    location: Contact
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
    BRONZE_SPONSOR
    SILVER_SPONSOR
    GOLD_SPONSOR
    PARTNER
    ORGANIZER
  }

  type Contact {
    name: String!
    about: String!
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
