const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Eloy Durán",
  about:
    "Eloy works at Artsy, where they’ve been using GraphQL in novel ways since its inception. Being big on ‘OSS by default’, for instance creating CocoaPods, he came to the JavaScript ecosystem from a native background via React Native and chose Relay as the place where in the React/GraphQL community he can best contribute.",
  image: "graphql-finland-2018/speakers/eloy.png",
  social: {
    twitter: "alloy",
    github: "alloy",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.PRESENTATION],
};
