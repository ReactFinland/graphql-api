import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import { paasitorni } from "../../locations";
import { glennReyes } from "../../people";

const workshop: Session = {
  type: SessionType.WORKSHOP,
  people: [glennReyes],
  title: "React and GraphQL – From zero to production",
  description: `
In this workshop we will build a production-ready React app with GraphQL backend from the ground up. This workshop is targeted to engineers who want to learn to build a complete and full stack React app with GraphQL.

### Topics covered

- Fundamentals & GraphQL core concepts
- Setting up the GraphQL Server with [Graphpack](https://github.com/glennreyes/graphpack)
- Exploring the GraphQL API using GraphQL Playground
- Setting up the GraphQL Client with [Apollo](https://github.com/apollographql/apollo-client)
- Querying and rendering data in your React app using [React Apollo](https://github.com/apollographql/react-apollo)
- Creating, updating & deleting data using GraphQL Mutations with Apollo
- Working with real-time data using GraphQL Subscriptions
- Access control patterns using Context
- Deployment with [ZEIT Now](https://zeit.co/now)

### Prerequisites

Developers have basic knowledge about the core concepts of React. Bring your own laptop (I'm on Mac). Make sure, latest node and yarn or npm works on your machine.
`,
  keywords: glennReyes.keywords,
  location: paasitorni,
};

export default workshop;
