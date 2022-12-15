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
const expeditious_engine_memory_1 = __importDefault(require("expeditious-engine-memory"));
const express_expeditious_1 = __importDefault(require("express-expeditious"));
const React = __importStar(require("react"));
require("reflect-metadata"); // Needed for introspecting classes
const Interactive_1 = __importDefault(require("./components/Interactive"));
const AssetDesignerPage_1 = __importDefault(require("./pages/AssetDesignerPage"));
const render_page_1 = __importDefault(require("./render-page"));
const cache = express_expeditious_1.default({
    namespace: "assetdesignercache",
    defaultTtl: "1 year",
    engine: expeditious_engine_memory_1.default(),
});
function routeAssetDesigner(router, projectRoot, scriptRoot) {
    const Interactive = Interactive_1.default(projectRoot, scriptRoot, __dirname);
    router.get("/asset-designer", cache.withTtl("1 hour"), ({ url, query }, res) => {
        const selectionId = query.selectionId;
        let bundlers = 0;
        // Given we use the same page for serving different bundles,
        // each needs a unique identifier based on the query (differing part)
        // TODO: Is this true anymore?
        const pageHtml = render_page_1.default("Asset designer", url, React.createElement(Interactive.Provider, { value: {
                registerBundler: () => {
                    bundlers++;
                },
                bundlingCompleted: (err) => {
                    bundlers--;
                    // TODO: Figure out how to handle Fusebox home directory
                    /*if (err) {
                      console.error(err);
      
                      return res.status(500).send("Failed to bundle frontend");
                    }*/
                    if (bundlers === 0) {
                        console.log("Done bundling");
                        res.status(200).send(pageHtml);
                    }
                },
            } },
            React.createElement(Interactive.Consumer, { relativeComponentPath: "./pages/AssetDesignerPage", component: AssetDesignerPage_1.default, componentHash: selectionId, props: { initialState: { selectionId } } })));
    });
}
exports.default = routeAssetDesigner;
//# sourceMappingURL=asset-designer.js.map