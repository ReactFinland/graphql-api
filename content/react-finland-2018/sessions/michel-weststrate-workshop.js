const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/michel-weststrate")],
  title: "State Management",
  description: `In this workshop we will dive into the basics and more advanced usage patterns of Mobx-State-Tree (MST) in combination with React. MST is a tool that helps to model complex problem domains and combines the best features of the modern state technologies out there.

1. The state tree philosophy.
2. Modeling your data structures and state
3. Views & actions
4. Asynchronous processes
5. Composing trees and types
6. Connecting to GraphQL
7. Writing your own middleware`,
  tickets: [
    {
      ...require("../tickets/day-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/xqzmkr5xxk8",
    },
    {
      ...require("../tickets/day-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/uv5zrkj3ybu",
    },
  ],
  keywords: require("../../people/michel-weststrate").keywords,
  location: require("../locations/valkoinen-sali"),
};
