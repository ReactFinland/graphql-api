"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/amazeeio/lagoon/blob/master/services/api/src/server.js
const http = __importStar(require("http"));
const util = __importStar(require("util"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./logger"));
const normalizePort = (value) => {
    const port = Number(value);
    if (!isNaN(port) && port > 0) {
        return port;
    }
    return false;
};
async function createServer() {
    logger_1.default.debug("Starting to boot the server.");
    const port = normalizePort(process.env.PORT || "3000");
    const app = await app_1.default();
    const server = http.createServer(app);
    const listen = util.promisify(server.listen).bind(server);
    await listen(port);
    logger_1.default.debug(`Finished booting the server. The API is reachable at http://localhost:${port.toString()}/graphql.`);
    // eslint-disable-line
    return server;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map