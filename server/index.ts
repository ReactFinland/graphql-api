import logger from "./logger";
import rebuildSites from "./rebuild-sites";
import createServer from "./server";

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
