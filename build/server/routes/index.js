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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_http_to_https_1 = require("express-http-to-https");
const path = __importStar(require("path"));
const schema_1 = __importDefault(require("../schema"));
const asset_designer_1 = __importDefault(require("./asset-designer"));
const calendar_1 = __importDefault(require("./calendar"));
const graphql_1 = __importDefault(require("./graphql"));
const media_1 = __importDefault(require("./media"));
const ping_1 = __importDefault(require("./ping"));
// FIXME: Resolve media path against project root, not module as this is brittle
const projectRoot = path.resolve(__dirname, "../../../");
async function createRouter() {
    // @ts-ignore
    const router = new express_1.default.Router();
    const schema = await schema_1.default();
    const mediaUrl = "/media";
    const mediaPath = path.join(projectRoot, "media");
    const scriptPath = path.join(projectRoot, ".scripts");
    router.use(cors_1.default());
    router.use(express_http_to_https_1.redirectToHTTPS([/localhost:(\d{4})/]));
    asset_designer_1.default(router, projectRoot, scriptPath);
    calendar_1.default(router);
    graphql_1.default(router, schema, projectRoot, mediaUrl);
    media_1.default(router, mediaUrl, mediaPath);
    ping_1.default(router);
    router.use("/scripts", express_1.default.static(scriptPath));
    return router;
}
exports.default = createRouter;
//# sourceMappingURL=index.js.map