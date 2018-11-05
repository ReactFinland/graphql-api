const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../people/jimmy-jia");

module.exports = {
  speakers: [speaker],
  title: "Building efficient, waterfall-free GraphQL applications",
  description: `GraphQL makes it easy to query your back end efficiently. However, when building large applications, this is not always enough on its own. For these larger projects, it’s easy to run into situations where requests still wait on each other, to the detriment of user experience. In this talk, we’ll explore how these problems arise, and look at strategies for mitigating these problems.`,
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
};
