const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/nik-graf");

module.exports = {
  speakers: [speaker],
  title: "Get started with Reason",
  description:
    "We will kick off with the basics and then quickly go into how to leverage features like variant types and pattern matching to make impossible states impossible. After you gained some knowledge about the basics the course will dig even further into ReasonReact.",
  type: enums.TALK,
  keywords: [keywords.REASON, keywords.REACT],
  urls: {
    web: "https://speakerdeck.com/nikgraf/get-started-with-reason",
  },
};
