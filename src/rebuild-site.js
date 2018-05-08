const request = require("request");
const logger = require("./logger");

function rebuildSite(url) {
  request.post(url, err => {
    logger.error(err);
  });
}

module.exports = rebuildSite;
