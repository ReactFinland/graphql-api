const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../people/sven-sauleau");

module.exports = {
  speakers: [speaker],
  title: "Understanding the differences is accepting",
  description:
    "I want to show you that the unexpected JavaScript things you encountered are understandable by humans and formally specified.",
  type: enums.LIGHTNING_TALK,
  keywords: speaker.keywords,
  urls: {
    web: "http://understanding-the-differences-is-accepting.ralf.cc/",
  },
};
