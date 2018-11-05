const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../people/johannes-schickling");

module.exports = {
  speakers: [speaker],
  title: "End-to-end type-safety with GraphQL",
  description: `GraphQL is becoming the new standard for API development and shows rapid adoption both on the client and server. This talk dives deep into one of the most powerful features of GraphQL - its type-system. See how GraphQL can be used to enable end-to-end type-safety across any language, making your application architecture more resilient and easier to evolve.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
};
