const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/rotem-mizrachi-meidan")],
  title: "Advanced E2E Testing with Detox",
  description: `In this workshop we will get to know the cool features hidden in Detox. By getting to know how Detox works and what makes it deterministic, you will be able write better and more stable tests.

You will either build a demo app to experiment with its features (basic and advanced), or work on your existing app’s test suite.
  
We will experiment with the following:

1. Running app against mock server
2. Mocking mechanisms: permissions, user notifications
3. Understanding synchronization issues
4. Debugging failed tests
5. Stabilizing E2E builds in CI`,
  tickets: [
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/lctskibt-fy",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/ldpzefjkijm",
    },
  ],
  keywords: require("../../people/rotem-mizrachi-meidan").keywords,
  location: require("../locations/valkoinen-sali"),
};
