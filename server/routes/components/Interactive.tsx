// import * as React from "react";
// import * as fs from 'fs'

function Interactive({ children, component }) {
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
