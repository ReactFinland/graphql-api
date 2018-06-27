const enums = require("../../../src/enums");
const keywords = require("../keywords");
const speaker = require("../people/ivan-goncharov");

module.exports = {
  speakers: [speaker],
  title: "Hidden gems of GraphQL query",
  description: `We all love GraphQL query syntax because it’s simple and easy to learn. At the same time, it has a few useful features that are typically overlooked. If you think that you already know everything about GraphQL queries this talk is for you. Warning: this talk will contain spoilers from GraphQL Specification.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS, keywords.SPEC],
};
