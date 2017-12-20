// @flow
// https://github.com/amazeeio/lagoon/blob/master/services/api/src/server.js
const http = require("http");
const util = require("util");
const logger = require("./logger");
const createApp = require("./app");

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
    `Finished booting the server. The API is reachable at http://localhost:${port.toString()}/graphql-2018.`
  );

  // eslint-disable-line
  return server;
};

module.exports = createServer;
