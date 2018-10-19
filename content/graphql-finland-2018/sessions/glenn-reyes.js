const enums = require("../../../src/enums");
const keywords = require("../keywords");
const speaker = require("../people/glenn-reyes");

module.exports = {
  speakers: [speaker],
  title: "Building tools for GraphQL",
  description: "Adopting GraphQL can be fairly demanding and it takes some time to find the right tooling. What can we do to improve DX and supercharge our GraphQL development? Let's deep-dive into GraphQL tooling that help us building GraphQL at scale.",
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
};
