const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/sara-vieira")],
  title: "Testing React",
  description: `In this workshop I will be going through unit testing in Javascript, how you can make it fun and meaningful for your app.

We will start by learning all the things about unit tests and how to implement very simple tests for your functions.

We will then move to React/React Native territory and learn about snapshot testing and components testing to keep regressions from happening.

By the end, we will implement all of this in continuous development with GitHub and Travis so you can leave with the exact idea on how to go about implementing extensive tests in your app without shedding a single tear.`,
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/58ief-l-vjq",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/wizz0uhlngq",
    },
  ],
  keywords: require("../../people/sara-vieira").keywords,
  location: require("../locations/valkoinen-sali"),
};
