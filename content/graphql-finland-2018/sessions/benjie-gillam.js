const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../people/benjie-gillam");

module.exports = {
  speakers: [speaker],
  title: "Database-first GraphQL Development",
  description: `Learn how a database-centric approach to GraphQL API development can give your engineers more time to focus on the important parts of your application. Topics covered include authorization, adhering to GraphQL best practices, embracing the power of PostgreSQL, and avoiding common pitfalls.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
};
