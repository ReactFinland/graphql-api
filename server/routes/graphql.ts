// import process from "process";
import { createHandler as graphql } from "graphql-http/lib/use/express";
import depthLimit from "graphql-depth-limit";

function routeGraphQL(router, schema, projectRoot, mediaUrl) {
  router.all(
    "/graphql",
    graphql({
      schema,
      validationRules: [depthLimit(7)],
      context: (req) => {
        const rawRequest = req.raw || req;

        return {
          hostname: getHostname(rawRequest),
          mediaUrl: `${getHostname(rawRequest)}${mediaUrl}`,
          projectRoot,
        };
      },
    })
  );
}

function getHostname(req) {
  const forwardedProtocol = getHeader(req, "x-forwarded-proto");
  const protocol = forwardedProtocol || req.protocol || "http";
  const host = getHeader(req, "host");

  return `${protocol}://${host}`;
}

function getHeader(req, name) {
  if (typeof req.get === "function") {
    return req.get(name);
  }

  const value = req.headers?.[name];

  return Array.isArray(value) ? value[0] : value;
}

export default routeGraphQL;
