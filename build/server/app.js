"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./logger"));
const routes_1 = __importDefault(require("./routes"));
async function createApp() {
    const app = express_1.default();
    // Use compression (gzip) for responses.
    app.use(compression_1.default());
    // Automatically decode json.
    app.use(body_parser_1.json({
        limit: "50mb",
    }));
    // Add custom configured logger (morgan through winston).
    app.use(morgan_1.default("combined", {
        stream: {
            write: message => logger_1.default.info(message),
        },
    }));
    const routes = await routes_1.default();
    app.use("/", routes);
    return app;
}
exports.default = createApp;
//# sourceMappingURL=app.js.map