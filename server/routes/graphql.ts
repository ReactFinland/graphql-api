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
        return {
          hostname: getHostname(req),
          mediaUrl: `${getHostname(req)}${mediaUrl}`,
          projectRoot,
        };
      },
    })
  );
}

function getHostname(req) {
  const forwardedProtocol = req.get("x-forwarded-proto");
  const protocol = forwardedProtocol || req.protocol || "http";
  const host = req.get("host");

  return `${protocol}://${host}`;
}

export default routeGraphQL;
