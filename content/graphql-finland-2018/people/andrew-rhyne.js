const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Andrew Rhyne",
  about:
    "Originally hailing from Austin, Andrew learned to code at the wee age of 8 first with BASIC and then C shortly thereafter.  He cut his teeth on Slackware while in grade school, and discovered his love for JavaScript and dynamic programming languages while at University. Andrew is very involved in the NodeJS OSS community, contributing to multiple Visionmedia projects such as debug and node-progress as well as the Apollostack ecosystem.  He is also the creator of multiple popular GraphQL server-side libraries, including apollo-errors and apollo-resolvers.",
  aboutShort:
    "Andrew is very involved in the NodeJS OSS community, contributing to multiple Visionmedia projects such as debug and node-progress as well as the Apollostack ecosystem.  He is also the creator of multiple popular GraphQL server-side libraries, including apollo-errors and apollo-resolvers.",
  image: "graphql-finland-2018/speakers/andrew.png",
  social: {
    twitter: "thebigredgeek",
    github: "thebigredgeek",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "San Francisco",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
