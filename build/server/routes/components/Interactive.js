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
const fs = __importStar(require("fs"));
const fuse_box_1 = require("fuse-box");
const trimStart_1 = __importDefault(require("lodash/trimStart"));
const mkdirp_1 = __importDefault(require("mkdirp"));
const path = __importStar(require("path"));
const React = __importStar(require("react"));
function createInteractive(projectRoot, scriptRoot, componentRoot) {
    mkdirp_1.default.sync(scriptRoot);
    // TODO: Figure out how to handle this
    const InteractiveContext = React.createContext({
        registerBundler: () => { },
        bundlingCompleted: () => { },
    });
    function InteractiveConsumer({ component, relativeComponentPath, componentHash = "", props = {}, }) {
        const componentName = `${path.basename(relativeComponentPath)}${componentHash}`;
        const indexName = `${componentName}.index.ts`;
        const indexPath = path.join(scriptRoot, indexName);
        const absoluteComponentPath = path.join(componentRoot, relativeComponentPath);
        const outputPath = `${path.join(scriptRoot, componentName)}.js`;
        const scriptPath = `/${trimStart_1.default(path.relative(projectRoot, outputPath), ".")}`;
        fs.writeFileSync(indexPath, renderScript(absoluteComponentPath, componentName, props));
        // TODO: Likely we should use Preact here (alias?)
        const fuse = fuse_box_1.FuseBox.init({
            target: "browser@es6",
            homeDir: scriptRoot,
            output: `${scriptRoot}/$name.js`,
            shim: {
                "type-graphql": {
                    source: path.join(projectRoot, "shims/type-graphql.js"),
                    exports: "TypeGraphQL",
                },
                react: {
                    exports: "React",
                },
                "react-dom": {
                    exports: "ReactDOM",
                },
            },
        });
        fuse
            .bundle(componentName)
            .cache(false) // TODO: Enable cache again?
            .instructions(`> ${indexName}`);
        const { registerBundler, bundlingCompleted } = React.useContext(InteractiveContext);
        registerBundler();
        fuse
            .run()
            .then(bundlingCompleted)
            .catch(bundlingCompleted);
        // Since rendering is streaming, it's important the script gets executed
        // only after the div has been created! Otherwise hydration fails.
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { id: componentName }, React.createElement(component, props)),
            React.createElement("script", { src: scriptPath })));
    }
    return {
        Provider: InteractiveContext.Provider,
        Consumer: InteractiveConsumer,
    };
}
function renderScript(componentPath, componentName, props = {}) {
    return `import React from "react";
import { hydrate } from "react-dom";
import component from "${componentPath}";

hydrate(
  React.createElement(component, ${JSON.stringify(props)}),
  document.getElementById("${componentName}")
);`;
}
exports.default = createInteractive;
//# sourceMappingURL=Interactive.js.map