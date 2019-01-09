import { json } from "body-parser";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import logger from "./logger";
import createRouter from "./routes";

const createApp = () => {
  const app = express();

  // Use compression (gzip) for responses.
  app.use(compression());

  // Automatically decode json.
  app.use(
    json({
      limit: "50mb",
    })
  );

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

export default createApp;
