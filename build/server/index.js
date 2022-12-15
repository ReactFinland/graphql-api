"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path = __importStar(require("path"));
require("reflect-metadata"); // Needed by type-graphql
// FIXME: Resolve against project root, not module as this is brittle
dotenv_1.default.config({
    path: path.resolve(__dirname, "../../.env"),
});
const logger_1 = __importDefault(require("./logger"));
const rebuild_sites_1 = __importDefault(require("./rebuild-sites"));
const server_1 = __importDefault(require("./server"));
process.on("SIGINT", () => {
    logger_1.default.info("\nGracefully shutting down from SIGINT (Ctrl-C)");
    process.exit(1);
});
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