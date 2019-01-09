const request = require("request");
const logger = require("./logger");

// Expects a comma separated string
function rebuildSites(urls) {
  urls.split(",").forEach(rebuildSite);
}

function rebuildSite(url) {
  request.post(url, err => {
    if (err) {
      return logger.error(err);
    }

    logger.info(`rebuilt ${url}`);
  });
}

module.exports = rebuildSites;
