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
        // const hostname = getHostname(req);
        // @ts-expect-error This is fine
        const hostname = req.headers.host;

        return {
          hostname,
          mediaUrl: `${hostname}${mediaUrl}`,
          projectRoot,
        };
      },
    })
  );
}

// TODO: Move to utils
/*
function getHostname(req) {
  if (process.env.HEROKU_HOSTNAME) {
    return process.env.HEROKU_HOSTNAME;
  }

  // For some reason, protocol is http on render
  return "https://" + req.get("host");
  // return req.protocol + "://" + req.get("host");
}
  */

export default routeGraphQL;
