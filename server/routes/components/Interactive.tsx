import { FuseBox, QuantumPlugin } from "fuse-box";
import * as path from "path";
import * as React from "react";

function Interactive({ children, component }) {
  // TODO: Figure out where to write the script so the server can find it
  // Maybe some dot directory in the project root for now?
  const target = path.join("scripts", component) + ".js";
  const fuse = FuseBox.init({
    target: "browser@es6",
    homeDir: __dirname, // TODO: Set this to tmp dir
    output: target,
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
    // TODO: This should point to a tmpfile in homeDir that loads component
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

  return (
    <>
      <script src={target} />
      {children}
    </>
  );
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
