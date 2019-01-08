const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/andrew-rhyne");

module.exports = {
  speakers: [speaker],
  title: "Real-time GraphQL with Event Sourcing",
  description:
    "GraphQL makes real-time easy with it's Subscriptions support, but how easy is it to build a backend that puts real-time data first?  With event sourcing, it's easier than you think!  The ability to easily subscribe to data changes and have blazing-fast reads on our data sets at Gatsby enables our team to build a sophisticated cloud-native offering that is flexible for even the most demanding product requirements.  Join Andrew as he gives a thirty-thousand foot overview of event sourcing and how naturally it fits with GraphQL and subscriptions.",
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/09-andrew-rhyne.pdf",
    video: "https://www.youtube.com/watch?v=wiEUApv9-Qc",
  },
};
