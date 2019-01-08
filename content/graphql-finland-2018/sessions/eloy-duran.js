const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/eloy-duran");

module.exports = {
  speakers: [speaker],
  title: "Where art thou, my error?",
  description: "",
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/14-eloy-duran.pdf",
    video: "https://www.youtube.com/watch?v=qKA-n8p-sNc",
  },
};
