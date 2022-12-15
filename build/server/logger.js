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
const util_1 = require("util");
const winston_1 = require("winston");
// Create the logs directory if it doesn't exist yet.
const directory = path.join(".", "logs");
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}
const ignorePingAndMedia = winston_1.format(info => {
    const message = info.message;
    if (util_1.isString(message) &&
        ["GET /ping ", "GET /media"].some(match => message.includes(match))) {
        return false;
    }
    return info;
});
const logger = winston_1.createLogger({
    exitOnError: false,
    format: winston_1.format.combine(ignorePingAndMedia(), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console({
            level: "debug",
            handleExceptions: true,
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map