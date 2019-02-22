import { json, urlencoded } from "body-parser";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import logger from "./logger";
import createRouter from "./routes";

async function createApp() {
  const app = express();

  // Use compression (gzip) for responses.
  app.use(compression());

  // Automatically decode json.
  app.use(
    json({
      limit: "50mb",
    })
  );

  // Automatically decode POST.
  app.use(
    urlencoded({
      extended: true,
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

  const routes = await createRouter();

  app.use("/", routes);

  return app;
}

export default createApp;
