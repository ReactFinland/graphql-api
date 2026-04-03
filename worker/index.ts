import { httpServerHandler } from "cloudflare:node";
import "reflect-metadata";
import createApp from "../server/app";
import createCloudflareRouter from "../server/routes/cloudflare";

const port = 3000;
const app = await createApp({
  createRouter: createCloudflareRouter,
});

app.listen(port);

export default httpServerHandler({ port });
