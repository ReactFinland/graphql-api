import "reflect-metadata";
import createRequestHandler from "../server/app";

const handleRequestPromise = createRequestHandler({
  enableMedia: false,
  projectRoot: "/bundle",
});

export default {
  async fetch(request) {
    const handleRequest = await handleRequestPromise;

    return handleRequest(request);
  },
};
