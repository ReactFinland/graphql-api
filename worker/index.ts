import "reflect-metadata";
import createRequestHandler from "../server/app";

interface Env {
  TOKEN: string;
}

export default {
  async fetch(request: Request, env: Env) {
    const handleRequest = await createRequestHandler({
      enableMedia: false,
      expectedToken: env.TOKEN,
      projectRoot: "/bundle",
    });

    return handleRequest(request);
  },
};
