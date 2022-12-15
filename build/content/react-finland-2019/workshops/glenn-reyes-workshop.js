"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const locations_1 = require("../../locations");
const people_1 = require("../../people");
const workshop = {
    type: Session_1.SessionType.WORKSHOP,
    people: [people_1.glennReyes],
    title: "React and GraphQL – From zero to production",
    description: `
In this workshop we will build a Twitter Lite React app with a GraphQL backend. This workshop is targeted to engineers who want to learn to build a complete and full stack React app with GraphQL.

### Topics covered

- Fundamentals & GraphQL core concepts
- Setting up the GraphQL Server
- Exploring the GraphQL API
- Setting up the GraphQL Client
- Querying and rendering data in your React app
- Creating, updating & deleting data using GraphQL Mutations
- Access control patterns using Context
- Bonus: Working with real-time data using GraphQL Subscriptions
- Bonus: Deployment setup

### Prerequisites

Developers have basic React knowledge. Bring your own laptop (I'm on Mac). Make sure, latest node and yarn or npm works on your machine.

> [Set up the workshop repository](https://github.com/glennreyes/react-graphql-workshop) to save some time and the preview the content.

> You can [find the workshop slides online](https://speakerdeck.com/glennreyes/react-finland-react-and-graphql-from-zero-to-production).
`,
    keywords: people_1.glennReyes.keywords,
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=glenn-reyes-workshop.js.map