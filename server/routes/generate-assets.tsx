import * as React from "react";
import { renderToString } from "react-dom/server";

function routeAssetGenerator(router) {
  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateAssets())));
  });

  router.get("/generate-assets/badges", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateBadges())));
  });

  router.get("/generate-assets/schedule", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateSchedule())));
  });

  router.get("/generate-assets/presentation", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GeneratePresentation())));
  });

  router.get("/generate-assets/text", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateText())));
  });
}

function GenerateAssets() {
  return (
    <ul>
      <li>
        <a href="./badges">Generate badges</a>
      </li>
      <li>
        <a href="./schedule">Generate a schedule poster</a>
      </li>
      <li>
        <a href="./presentation#0">Generate a presentation with speakers</a>
      </li>
      <li>
        <a href="./text#'Speakers' room">Generate a speakers' room poster</a>
      </li>
      <li>
        <a href="./text#←">Generate a left arrow poster</a>
      </li>
      <li>
        <a href="./text#→">Generate a right arrow poster</a>
      </li>
    </ul>
  );
}

function GenerateBadges() {
  return <div>generate badges</div>;
}

function GenerateSchedule() {
  return <div>generate schedule</div>;
}

function GeneratePresentation() {
  return <div>generate presentation</div>;
}

function GenerateText() {
  return <div>generate text</div>;
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
