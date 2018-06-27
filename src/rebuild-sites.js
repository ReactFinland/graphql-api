const request = require("request");
const logger = require("./logger");

// Expects a comma separated string
function rebuildSites(urls) {
  urls.split(",").forEach(rebuildSite);
}

function rebuildSite(url) {
  request.post(url, (err, rest) => {
    if (err) {
      logger.error(err);
    }

    console.log(rest);
  });
}

module.exports = rebuildSites;
