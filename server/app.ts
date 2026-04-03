import { json, urlencoded } from "body-parser";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./logger";

type CreateRouter = () => Promise<express.Router>;

interface CreateAppOptions {
  createRouter?: CreateRouter;
}

async function createApp(options: CreateAppOptions = {}) {
  const app = express();
  const getRouter =
    options.createRouter || (await import("./routes")).default;

  // Wear a helmet for extra security.
  app.use(
    helmet({
      frameguard: false,
    })
  );

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

  const routes = await getRouter();

  app.use("/", routes);

  return app;
}

export default createApp;
