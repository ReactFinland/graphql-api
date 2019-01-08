const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/ellie-day");

module.exports = {
  speakers: [speaker],
  title: "Emerging uses of GraphQL for rapid application development",
  description:
    "GraphQL makes dealing with application data a breeze, especially with open source libraries such as Apollo. However, many schemas simply mirror their RESTful counterparts, limiting their overall usefulness. In this talk I will cover emerging patterns that enable rapid GraphQL-powered application development.",
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/02-ellie-day.pdf",
    video: "https://www.youtube.com/watch?v=fdJ0-0TiCQs",
  },
};
