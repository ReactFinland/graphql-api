import * as fs from "fs";
import { FuseBox } from "fuse-box";
import trimStart from "lodash/trimStart";
import mkdirp from "mkdirp";
import * as path from "path";
import * as React from "react";

function createInteractive(projectRoot, scriptRoot, componentRoot) {
  mkdirp.sync(scriptRoot);

  return function Interactive({
    component,
    relativeComponentPath,
    componentHash = "",
    props = {},
  }) {
    const componentName = `${path.basename(
      relativeComponentPath
    )}${componentHash}`;
    const indexName = `${componentName}.index.ts`;
    const indexPath = path.join(scriptRoot, indexName);
    const absoluteComponentPath = path.join(
      componentRoot,
      relativeComponentPath
    );
    const outputPath = `${path.join(scriptRoot, componentName)}.js`;
    const scriptPath = `/${trimStart(
      path.relative(projectRoot, outputPath),
      "."
    )}`;

    fs.writeFileSync(
      indexPath,
      renderScript(absoluteComponentPath, componentName, props)
    );

    // TODO: Likely we should use Preact here (alias?)
    const fuse = FuseBox.init({
      target: "browser@es6",
      homeDir: scriptRoot,
      output: `${scriptRoot}/$name.js`,
      shim: {
        react: {
          exports: "React",
        },
        "react-dom": {
          exports: "ReactDOM",
        },
      },
      // TODO: Apply terser to minify
    });

    fuse
      .bundle(componentName)
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
        <div id={componentName}>{React.createElement(component, props)}</div>
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
