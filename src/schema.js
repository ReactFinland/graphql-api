const { makeExecutableSchema } = require("graphql-tools");
const content2018 = require("@react-finland/content-2018");

const typeDefs = `
  type Query {
    breakfasts: [[Session]],
    coffeeBreaks: [[Session]],
    lunches: [[Session]],
    panels: [[Session]],
    presentations: [Session],
    schedules: [Schedule],
    speakers: [Speaker],
    workshops: [Session]
  }

  type Session {
    title: String,
    description: String,
    speakers: [Speaker]
  }

  type Speaker {
    name: String!,
    about: String!,
    photo: String!,
    homepage: String,
    twitter: String,
    github: String,
    linkedin: String
  }

  type Schedule {
    day: String,
    intervals: [Interval]
  }

  type Interval {
    begin: String,
    end: String,
    sessions: [Session]
  }
`;

function generateQueries() {
  const ret = {};

  Object.keys(content2018).forEach(k => {
    // Skip enums
    if (k === "enums") {
      return;
    }

    ret[k] = () => Object.values(content2018[k]);
  });

  return ret;
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: generateQueries(),
  },
});
