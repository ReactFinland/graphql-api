const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Glenn Reyes",
  about:
    "Glenn is a front-end Engineer, who builds modern user interfaces and apps with React & GraphQL, loves OSS, co-organizes ReactVienna meetups, and plays JM music on guitar.",
  image: "speakers/glenn.jpg",
  social: {
    homepage: "https://glennreyes.com/",
    twitter: "glnnrys",
    github: "glennreyes",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.fgTALK],
};
