import "reflect-metadata";
import createRequestHandler from "../server/app";

interface Env {
  TOKEN: string;
}

let cachedToken: string | undefined;
let handleRequestPromise: ReturnType<typeof createRequestHandler> | undefined;

function getHandleRequest(env: Env) {
  if (!handleRequestPromise || cachedToken !== env.TOKEN) {
    cachedToken = env.TOKEN;
    handleRequestPromise = createRequestHandler({
      enableMedia: false,
      expectedToken: env.TOKEN,
      projectRoot: "/bundle",
    });
  }

  return handleRequestPromise;
}

export default {
  async fetch(request: Request, env: Env) {
    const handleRequest = await getHandleRequest(env);

    return handleRequest(request);
  },
};
