// @flow
const express = require("express");
const graphql = require("express-graphql");
const schema = require("@react-finland/content-2018/src/schema");

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
