const enums = require("../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Carolyn Stransky",
  about:
    "Carolyn Stransky is a frontend developer and former technical writer based in Berlin. She currently works at Blacklane and teaches at ReDI School of Digital Integration. You’ll usually find her looking at memes or taking selfies in the nearest restroom.",
  image: "graphql-finland-2018/speakers/carolyn.jpg",
  social: {
    twitter: "carolstran",
    github: "carolstran",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.TALK],
};
