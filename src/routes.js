// @flow
const express = require("express");
const graphql = require("express-graphql");
const schema = require("./schema");

function createRouter() {
  const router = new express.Router();

  // Enable graphql requests.
  router.all(
    "/graphql",
    graphql({
      graphiql: process.env.NODE_ENV === "development",
      pretty: true,
      schema,
    })
  );

  return router;
}

module.exports = createRouter;
