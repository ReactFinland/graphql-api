const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../people/michel-weststrate");

module.exports = {
  speakers: [speaker],
  title: "Immer: Immutability made easy",
  description:
    "Immer is a tiny package that allows you to work with immutable data structures with unprecedented ease. It doesn't require learning new data structures or update APIs, but instead creates a temporarily shadow tree which can be modified using the standard JavaScript APIs. The shadow tree will be used to generate your next immutable state tree. Join this talk to see how to write your reducers in a much more readable way, with half the code and without requiring additional large libraries.",
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.IMMER],
  urls: {
    web: "http://immer.surge.sh/",
  },
};
