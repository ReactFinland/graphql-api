import cors from "cors";
import express from "express";
import * as path from "path";
import generateSchema from "../schema";
import routeCalendar from "./calendar";
import routeGraphQL from "./graphql";
import routeMedia from "./media";
import routePing from "./ping";

// FIXME: Resolve media path against project root, not module as this is brittle
const projectRoot = path.resolve(__dirname, "../../../");

async function createRouter() {
  const router = express.Router();
  const schema = await generateSchema();
  const mediaUrl = "/media";
  const mediaPath = path.join(projectRoot, "media");

  router.use(cors());

  routeCalendar(router);
  routeGraphQL(router, schema, projectRoot, mediaUrl);
  routeMedia(router, mediaUrl, mediaPath);
  routePing(router);

  return router;
}

export default createRouter;
