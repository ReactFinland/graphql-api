// https://github.com/amazeeio/lagoon/blob/master/services/api/src/logger.js
const winston = require("winston");
const path = require("path");
const fs = require("fs");

// Create the logs directory if it doesn't exist yet.
const directory = path.join(".", "logs");
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

const logger = winston.createLogger({
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
});

module.exports = logger;
