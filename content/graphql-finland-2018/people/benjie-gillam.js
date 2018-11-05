const enums = require("../../../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Benjie Gillam",
  about:
    "Benjie loves using and talking about GraphQL, Node.js, PostgreSQL and React; he is the maintainer of PostGraphile, the original instant GraphQL API for your Postgres database.",
  image: "graphql-finland-2018/speakers/benjie.jpg",
  social: {
    homepage: "https://graphile.org/",
    twitter: "benjie",
    github: "benjie",
    linkedin: "benjiegillam",
  },
  location: {
    country: {
      name: "UK",
      code: "GB",
    },
    city: "Southampton",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
