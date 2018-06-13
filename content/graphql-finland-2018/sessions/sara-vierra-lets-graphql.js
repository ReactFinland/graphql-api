const keywords = require("../keywords");
const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../contacts/sara-vieira")],
  title: "Let’s Learn GraphQL",
  description: `You signed up for this workshop because you are probably super excited about GraphQL and don’t know where to start.
  That’s exactly why GraphQL Finland has this workshop, so that you can learn some GraphQL before diving into the conference.

  Here we will cover:

  - Creating A GraphQL Server in Node and connecting it to a MongoDB database
  - Using Prisma to easily create a GraphQL server
  - Using GraphQL in the Frontend with React for getting data and also for managing local state
  - If there is anyone who wants to learn the same concepts in Vue we can go over that too

  You will leave knowing the basics of GraphQL and ready to enjoy the rest of the conference and build your awesome API’s and Apps using this amazing technology.
`,
  keywords: [
    keywords.GRAPHQL,
    keywords.REACT,
    keywords.APOLLO,
    keywords.PRISMA,
  ],
  location: require("../locations/paasitorni"),
};
