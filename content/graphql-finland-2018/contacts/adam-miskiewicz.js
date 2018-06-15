const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Adam Miskiewicz",
  about:
    "Adam Miskiewicz is a software engineer at Airbnb. Lover of his two dogs, JavaScript, and GraphQL.",
  image: "graphql-finland-2018/speakers/adam.jpg",
  social: {
    homepage: "http://www.adammiskiewicz.com/",
    twitter: "@skevy",
    github: "skevy",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "San Francisco",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.TALK],
};
