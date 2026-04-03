import "reflect-metadata";
import createRequestHandler from "../server/app";

const handleRequest = await createRequestHandler({
  enableMedia: false,
  projectRoot: "/bundle",
});

export default {
  fetch(request) {
    return handleRequest(request);
  },
};
