// @flow
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const { json } = require("body-parser");
const logger = require("./logger");
const createRouter = require("./routes");

const createApp = () => {
  const app = express();

  // Use compression (gzip) for responses.
  app.use(compression());

  // Automatically decode json.
  app.use(json());

  // Add custom configured logger (morgan through winston).
  app.use(
    morgan("combined", {
      stream: {
        write: message => logger.info(message),
      },
    })
  );

  // Add routes.
  app.use("/", createRouter());

  return app;
};

module.exports = createApp;
