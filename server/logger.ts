// https://github.com/amazeeio/lagoon/blob/master/services/api/src/logger.js
import * as fs from "fs";
import * as path from "path";
import * as winston from "winston";

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
    }),
  ],
});

export default logger;
