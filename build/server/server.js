"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    let server;
    try {
        server = app.listen(port, () => logger_1.default.debug(`Finished booting the server. The API is reachable at http://localhost:${port.toString()}/graphql.`));
    }
    catch (err) {
        logger_1.default.error(err);
        process.exit(1);
    }
    // eslint-disable-line
    return server;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map