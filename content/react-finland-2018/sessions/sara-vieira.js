const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/sara-vieira");

module.exports = {
  speakers: [speaker],
  title: "State Management in React Apps with Apollo Client",
  description:
    "Apollo has given us freedom and happiness when it comes to managing our data coming from the server but we still had to write code and sometimes a lot of it to manage our local state? Well, what if we managed it with queries too? Sounds too awesome right? Let's learn how to do this with apollo-link-state.",
  type: enums.TALK,
  keywords: [keywords.APOLLO, keywords.GRAPHQL],
  urls: {
    web: "https://link-state-is-dope.now.sh/",
  },
};
