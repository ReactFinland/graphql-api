const { makeExecutableSchema } = require("graphql-tools");
const content = require("./content");
const typeDefs = require("./type-defs");

function executable() {
  return makeExecutableSchema({
    typeDefs,
    resolvers: {
      Query: generateQueries(),
    },
  });
}

function generateQueries() {
  const ret = {};

  Object.keys(content).forEach(k => {
    ret[k] = () => Object.values(content[k]);
  });

  ret.page = (_, { id: pageId }) =>
    content.pages.find(({ id }) => id === pageId);

  return ret;
}

module.exports = executable;
