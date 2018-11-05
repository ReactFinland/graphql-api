const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/kadi-kraman");

module.exports = {
  speakers: [speaker],
  title: "Going offline first with GraphQL",
  description: `We live in a world that is online 24/7. Even so, we are reasonably lenient on the web when we're not connected to the internet. However, for mobile apps, not working in flakey connectivity zones is borderline unacceptable. Users expect your app to work offline (though they don't phrase it like that). They really don't care that a network request has failed or is taking a long time. And thankfully, we developers can make it happen.

This talk is about how tooling in GraphQL makes it reasonably straightforward to get your React Native app working offline.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
};
