const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/glenn-reyes")],
  title: "React and GraphQL – From zero to production",
  description: `
In this workshop we will build a production-ready React app with GraphQL backend from the ground up. This workshop is targeted to engineers who want to learn to build a complete and full stack React app with GraphQL.

## Topics covered

- Fundamentals & GraphQL core concepts
- Setting up the GraphQL Server with [Graphpack](https://github.com/glennreyes/graphpack)
- Exploring the GraphQL API using GraphQL Playground
- Setting up the GraphQL Client with [Apollo](https://github.com/apollographql/apollo-client)
- Querying and rendering data in your React app using [React Apollo](https://github.com/apollographql/react-apollo)
- Creating, updating & deleting data using GraphQL Mutations with Apollo
- Working with real-time data using GraphQL Subscriptions
- Access control patterns using Context
- Deployment with [ZEIT Now](https://zeit.co/now)

## Prerequisites

Developers have basic knowledge about the core concepts of React. Bring your own laptop (I'm on Mac). Make sure, latest node and yarn or npm works on your machine.
`,
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/kmogtpeshgs",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/y11c-klqvss",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/c4g-t75rfog",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/m3kenzkowg0",
    },
  ],*/
  keywords: require("../../people/glenn-reyes").keywords,
  location: require("../../locations")["paasitorni"],
};
