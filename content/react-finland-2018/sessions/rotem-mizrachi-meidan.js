const enums = require("../../../src/enums");
const speaker = require("../people/rotem-mizrachi-meidan");

module.exports = {
  speakers: [speaker],
  title: "Detox: A year in. Building it, Testing with it",
  description: `
A year in, developing and using Detox in production taught us a lot. From designing its API to consuming it, testing real user scenarios to advanced mocking, we learned what makes sense when E2E testing an app and what doesn’t.

In this talk, we’ll discuss how Detox works and what makes it deterministic, cover some advanced use cases and methodologies, go over new features and tease the ones that are upcoming.
`,
  type: enums.TALK,
  keywords: speaker.keywords,
};
