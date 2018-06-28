const logger = require("./logger");
const createServer = require("./server");
const rebuildSites = require("./rebuild-sites");

(async () => {
  logger.debug("Starting application");

  try {
    await createServer();

    logger.debug("Running");

    if (process.env.NODE_ENV === "production") {
      rebuildSites(process.env.REBUILD_SITES);
    }
  } catch (e) {
    logger.error("Failed to start");
    logger.error(e.stack);
  }
})();
