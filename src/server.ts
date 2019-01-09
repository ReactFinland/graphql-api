// https://github.com/amazeeio/lagoon/blob/master/services/api/src/server.js
import * as http from "http";
import * as util from "util";
import createApp from "./app";
import logger from "./logger";

const normalizePort = value => {
  const port = parseInt(value, 10);

  if (!isNaN(port) && port > 0) {
    return port;
  }

  return false;
};

const createServer = async () => {
  logger.debug("Starting to boot the server.");

  const port = normalizePort(process.env.PORT || "3000");
  const server = http.createServer(createApp());

  // $FlowIgnore https://github.com/facebook/flow/pull/4176
  const listen = util.promisify(server.listen).bind(server);
  await listen(port);

  logger.debug(
    `Finished booting the server. The API is reachable at http://localhost:${port.toString()}/graphql.`
  );

  // eslint-disable-line
  return server;
};

export default createServer;
