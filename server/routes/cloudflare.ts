import cors from "cors";
import express from "express";
import generateSchema from "../schema";
import routeCalendar from "./calendar";
import routeGraphQL from "./graphql";
import routePing from "./ping";

async function createCloudflareRouter() {
  // @ts-ignore
  const router = new express.Router();
  const schema = await generateSchema();
  const mediaUrl = "/media";

  router.use(cors());

  routeCalendar(router);
  routeGraphQL(router, schema, "/bundle", mediaUrl);
  routePing(router);

  return router;
}

export default createCloudflareRouter;
