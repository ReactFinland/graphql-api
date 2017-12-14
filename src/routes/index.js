// @flow
const express = require("express");
const graphqlRoute = require("./graphql");

function createRouter() {
  const router = new express.Router();

  // Enable graphql requests.
  router.all("/graphql", ...graphqlRoute);

  return router;
}

module.exports = createRouter;
