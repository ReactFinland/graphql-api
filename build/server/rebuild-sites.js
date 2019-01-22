"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const logger_1 = __importDefault(require("./logger"));
// Expects a comma separated string
function rebuildSites(urls) {
    urls.split(",").forEach(rebuildSite);
}
function rebuildSite(url) {
    request_1.default.post(url, err => {
        if (err) {
            return logger_1.default.error(err);
        }
        return logger_1.default.info(`rebuilt ${url}`);
    });
}
exports.default = rebuildSites;
//# sourceMappingURL=rebuild-sites.js.map