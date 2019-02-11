import * as React from "react";
import { renderToString } from "react-dom/server";

function routeAssetGenerator(router) {
  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateAssetsIndex())));
  });
}

function GenerateAssetsIndex() {
  return (
    <ul>
      <li>
        <a href="/badges">Generate badges</a>
      </li>
      <li>
        <a href="/schedule">Generate a schedule poster</a>
      </li>
      <li>
        <a href="/presentation#0">Generate a presentation with speakers</a>
      </li>
      <li>
        <a href="/speakers-room">Generate a speakers' room poster</a>
      </li>
      <li>
        <a href="/left-arrow">Generate a left arrow poster</a>
      </li>
      <li>
        <a href="/right-arrow">Generate a right arrow poster</a>
      </li>
    </ul>
  );
}

function renderMarkup(html) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Asset generator</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="./index.js"></script>
    </body>
  </html>`;
}

export default routeAssetGenerator;
