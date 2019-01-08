const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/adam-miskiewicz");

module.exports = {
  speakers: [speaker],
  title: "Adopting GraphQL in Large Codebases",
  description: `With the vibrant and growing GraphQL ecosystem and community, it's simpler than ever to start using GraphQL in your project. However, adopting GraphQL incrementally (and carefully!) in huge codebases powering large distributed systems is not quite as straightforward. We'll dive into how Airbnb is tackling this challenge, what we've learned so far, and how we plan to continue evolving our GraphQL infrastructure in the future.`,
  type: enums.KEYNOTE,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "",
    video: "https://www.youtube.com/watch?v=8KLwLzRlETc",
  },
};
