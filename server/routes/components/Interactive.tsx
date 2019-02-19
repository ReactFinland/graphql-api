// import * as React from "react";
// import * as fs from 'fs'
import { FuseBox, QuantumPlugin } from "fuse-box";

function Interactive({ children, component }) {
  const fuse = FuseBox.init({
    target: "browser@es6",
    homeDir: __dirname,
    output: "scripts/$name.js",
    plugins: [
      QuantumPlugin({
        uglify: true,
        treeshake: true,
        bakeApiIntoBundle: component,
      }),
    ],
  });

  fuse
    .bundle(component)
    .cache(false)
    .instructions(`> index.ts`);

  // TODO: This is async -> Script path might not be ready on response
  // due to a race condition -> Elevate bundling?
  fuse.run().then(() => console.log("done"));

  /*
  try {
    const pathToComponent = require.resolve(component);

    // TODO: Read and process component into a script
    // TODO: Write a script to /media/scripts/
    // TODO: Refer to the written script using a <script> tag
  } catch (err) {
    console.error(`Failed to load ${component}`, err);
  }
*/

  return children;
}

// TODO
/*
function renderScript() {
  return `import React from "react";
  import ReactDOM from "react-dom";
  
  <% for (var component of components) { %>
  import <%= component.name %> from  "<%= component.id %>";
  <% } %>
  
  <% for (var component of components) { %>
  ReactDOM.render(
    React.createElement(<%= component.name %>, <%- component.props %>),
    document.getElementById('<%= component.id %>')
  );
  <% } %>
  `;
}
*/

export default Interactive;
