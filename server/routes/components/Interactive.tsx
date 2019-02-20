import * as fs from "fs";
import { FuseBox } from "fuse-box";
import { trimStart } from "lodash";
import * as path from "path";
import * as React from "react";

function createInteractive(projectRoot, scriptRoot) {
  return function Interactive({ children, component, props }) {
    const indexName = `${component}.index.ts`;
    const indexPath = path.join(scriptRoot, indexName);
    const componentPath = path.join(__dirname, component);
    const outputPath = path.join(scriptRoot, component) + ".js";
    const scriptPath = `/${trimStart(
      path.relative(projectRoot, outputPath),
      "."
    )}`;

    fs.writeFileSync(indexPath, renderScript(componentPath, component, props));

    // TODO: Likely we should use Preact here (alias?)
    const fuse = FuseBox.init({
      target: "browser@es6",
      homeDir: scriptRoot,
      output: `${scriptRoot}/$name.js`,
      // TODO: Apply terser to minify
    });

    fuse
      .bundle(component)
      .cache(false) // TODO: Enable cache again?
      .instructions(`> ${indexName}`);

    // TODO: This can fail if code is incorrect -> catch failure and handle
    // TODO: This is async -> Script path might not be ready on response
    // due to a race condition -> Elevate to response through context?
    fuse.run().then(() => console.log("bundling finished"));

    // Since rendering is streaming, it's important the script gets executed
    // only after the div has been created! Otherwise hydration fails.
    return (
      <>
        <div id={component}>{children}</div>
        <script src={scriptPath} />
      </>
    );
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

export default createInteractive;
