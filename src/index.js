const logger = require("./logger");
const createServer = require("./server");

(async () => {
  logger.debug("Starting application");

  try {
    await createServer();

    logger.debug("Running");
  } catch (e) {
    logger.error("Failed to start");
    logger.error(e.stack);
  }
})();
