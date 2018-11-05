const enums = require("../../../src/enums");
const speaker = require("../../people/patrick-stapfer");

module.exports = {
  speakers: [speaker],
  title: "Making Unreasonable States Impossible",
  description:
    "Based on @nikgraf's introduction to Reason (Get started with Reason), this talk goes deeper into the world of variant types and pattern matching and puts them into a practical context. You will learn how these tools help you design solid APIs, which are impossible to misuse by consumers. Additionally you will get more insights into practical ReasonReact code.",
  type: enums.TALK,
  keywords: speaker.keywords,
  urls: {
    web: "https://speakerdeck.com/ryyppy/making-unreasonable-states-impossible",
  },
};
