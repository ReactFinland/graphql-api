import cors from "cors";
import express from "express";
import { redirectToHTTPS } from "express-http-to-https";
import * as path from "path";
import generateSchema from "../schema";
import routeCalendar from "./calendar";
import routeGenerateAssets from "./generate-assets";
import routeGraphQL from "./graphql";
import routeMedia from "./media";

// FIXME: Resolve media path against project root, not module as this is brittle
const projectRoot = path.resolve(__dirname, "../../../");

async function createRouter() {
  // @ts-ignore
  const router = new express.Router();
  const schema = await generateSchema();
  const mediaUrl = "/media";
  const mediaPath = path.join(projectRoot, "media");

  router.use(cors());
  router.use(redirectToHTTPS([/localhost:(\d{4})/]));

  routeCalendar(router);
  routeGenerateAssets(router, schema);
  routeGraphQL(router, schema, mediaUrl);
  routeMedia(router, mediaUrl, mediaPath);

  // TODO: Move to a module
  if (process.env.NODE_ENV !== "production") {
    const serverVersion = new Date().toString();

    router.get("/ping", (req, res) => res.status(200).json({ serverVersion }));
  }

  return router;
}

export default createRouter;
