const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Mikhail Novikov",
  about:
    "Mikhail is a GraphQL hipster. He started GraphQL startup before GraphQL was ever public. The startup failed, but Mikhail has been active in GraphQL community ever since, working on tools like Schema Stitching and Apollo Launchpad. He is one of the organizers of GraphQL Finland.",
  aboutShort:
    "Mikhail is a GraphQL hipster. He started GraphQL startup before GraphQL was ever public. After that he worked on tools like Schema Stitching and Apollo Launchpad and taught GraphQL at multiple workshops.",
  image: "graphql-finland-2018/organizers/mikhail.jpg",
  social: {
    homepage: "https://freiksenet.com",
    twitter: "freiksenet",
    github: "freiksenet",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.GRAPHQL, keywords.CMS],
  type: [enums.WORKSHOP_HOST, enums.ORGANIZER],
};
