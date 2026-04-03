// import process from "process";
import { createHandler as graphql } from "graphql-http/lib/use/fetch";
import depthLimit from "graphql-depth-limit";

function createGraphQLRequestHandler(schema, projectRoot, mediaUrl) {
  return graphql({
    schema,
    validationRules: [depthLimit(7)],
    context: (request) => {
      const rawRequest = request.raw || request;

      return {
        hostname: getHostname(rawRequest),
        mediaUrl: `${getHostname(rawRequest)}${mediaUrl}`,
        projectRoot,
      };
    },
  });
}

function getHostname(request: { headers: Headers; url: string }) {
  const forwardedProtocol = request.headers.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol || new URL(request.url).protocol.replace(":", "");
  const host = request.headers.get("host") || new URL(request.url).host;

  return `${protocol}://${host}`;
}

export default createGraphQLRequestHandler;
