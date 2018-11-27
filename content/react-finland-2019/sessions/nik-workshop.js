const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/nik-graf")],
  title: "Advanced React – Suspense, Time Slicing, Hooks and more …",
  description: `React has changed quite a lot in the past couple months. New lifecycle methods were released, Suspense and Time Slicing is around the corner and we even got a new API: React Hooks.

In this workshop we build an application relying on new techniques. The examples will include challenges that include the following topics:

- Async React (Suspense, Time Slicing)
- Advanced React Hooks (useLayoutEffect, useReducer, …)
- React.lazy
- Refs
- Context

The workshop is targeting intermediate and experienced React developers, that are looking to not only learn the mentioned topics from a theoretical standpoint, but also try them out in practice.

The workshop is split into several modules. Each of them starts with a 20 min presentation, 30-50 min coding session and is followed by a 10 min retrospective.
`,
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/gjzhvxpdmuu",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/ype-9yteewo",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/zcsd4ygn7jo",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/766bgaavf-q",
    },
  ],*/
  keywords: require("../../people/nik-graf").keywords,
  location: require("../../locations")["paasitorni"],
};
