"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const rebuild_sites_1 = __importDefault(require("./rebuild-sites"));
const server_1 = __importDefault(require("./server"));
(async () => {
    logger_1.default.debug("Starting application");
    try {
        await server_1.default();
        logger_1.default.debug("Running");
        if (process.env.NODE_ENV === "production") {
            rebuild_sites_1.default(process.env.REBUILD_SITES);
        }
    }
    catch (e) {
        logger_1.default.error("Failed to start");
        logger_1.default.error(e.stack);
    }
})();
//# sourceMappingURL=index.js.map