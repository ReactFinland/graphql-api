// @flow
const express = require("express");
const graphql = require("express-graphql");
const schema2018 = require("@react-finland/content-2018/src/schema");

function createRouter() {
  const router = new express.Router();

  // Enable graphql requests.
  router.all(
    "/graphql-2018",
    graphql({
      graphiql: process.env.NODE_ENV === "development",
      pretty: true,
      schema: schema2018,
    })
  );

  return router;
}

module.exports = createRouter;
