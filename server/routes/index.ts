import cors from "cors";
import express from "express";
import { redirectToHTTPS } from "express-http-to-https";
import * as path from "path";
import routeCalendar from "./calendar";
import routeGenerateAssets from "./generate-assets";
import routeGraphQL from "./graphql";
import routeMedia from "./media";

// FIXME: Resolve media path against project root, not module as this is brittle
const projectRoot = path.resolve(__dirname, "../../../");

async function createRouter() {
  // @ts-ignore
  const router = new express.Router();
  const mediaUrl = "/media";
  const mediaPath = path.join(projectRoot, "media");

  router.use(cors());
  router.use(redirectToHTTPS([/localhost:(\d{4})/]));

  await routeCalendar(router);
  await routeGenerateAssets(router);
  await routeGraphQL(router, mediaUrl);
  await routeMedia(router, mediaUrl, mediaPath);

  return router;
}

export default createRouter;
