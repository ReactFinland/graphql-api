"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/amazeeio/lagoon/blob/master/services/api/src/logger.js
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const winston = __importStar(require("winston"));
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
exports.default = logger;
//# sourceMappingURL=logger.js.map