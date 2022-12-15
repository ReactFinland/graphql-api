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
const path = __importStar(require("path"));
const logger_1 = __importDefault(require("../logger"));
function routeMedia(router, mediaUrl, mediaPath) {
    router.all(`${mediaUrl}/*`, async (req, res, next) => {
        const asset = req.params["0"];
        if ([".jpg", ".png", ".svg"].includes(path.extname(asset))) {
            try {
                return res.sendFile(path.join(mediaPath, asset));
            }
            catch (err) {
                logger_1.default.error(err);
                next();
            }
        }
        else {
            res.sendFile(asset, { root: mediaPath }, (err) => {
                res.end();
                if (err) {
                    logger_1.default.error(err);
                }
            });
        }
    });
}
exports.default = routeMedia;
//# sourceMappingURL=media.js.map