// https://github.com/amazeeio/lagoon/blob/master/services/api/src/server.js
import * as http from "http";
import * as util from "util";
import createApp from "./app";
import logger from "./logger";

const normalizePort = (value: string) => {
  const port = Number(value);

  if (!isNaN(port) && port > 0) {
    return port;
  }

  return false;
};

async function createServer() {
  logger.debug("Starting to boot the server.");

  const port = normalizePort(process.env.PORT || "3000");
  const app = await createApp();
  const server = http.createServer(app);

  const listen = util.promisify(server.listen).bind(server);
  await listen(port);

  logger.debug(
    `Finished booting the server. The API is reachable at http://localhost:${port.toString()}/graphql.`
  );

  // eslint-disable-line
  return server;
}

export default createServer;
