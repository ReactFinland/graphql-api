import logger from "./logger";

// Expects a comma separated string
function rebuildSites(urls?: string) {
  (urls || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean)
    .forEach((url) => {
      void rebuildSite(url);
    });
}

async function rebuildSite(url: string) {
  try {
    const response = await fetch(url, { method: "POST" });

    if (!response.ok) {
      logger.error(`failed to rebuild ${url}: ${response.status}`);

      return;
    }

    logger.info(`rebuilt ${url}`);
  } catch (err) {
    logger.error(err);
  }
}

export default rebuildSites;
