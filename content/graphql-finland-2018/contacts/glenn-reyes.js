const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Glenn Reyes",
  about:
    "Glen is a front-end Engineer, who builds modern user interfaces and apps with React & GraphQL, loves OSS, co-organizes ReactVienna meetups, and plays JM music on guitar.",
  image: "graphql-finland-2018/speakers/glenn.jpg",
  social: {
    homepage: "https://glennreyes.com/",
    twitter: "@glnnrys",
    github: "glnnrys",
  },
  location: {
    country: {
      name: "Austria",
      code: "AU",
    },
    city: "Vienna",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
