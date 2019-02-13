import { renderToString } from "react-dom/server";
import GenerateBadges from "./generate-assets/badges";
import GenerateAssets from "./generate-assets/index";
import GeneratePresentation from "./generate-assets/presentation";
import GenerateSchedule from "./generate-assets/schedule";
import GenerateText from "./generate-assets/text";

function routeAssetGenerator(router, schema) {
  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateAssets())));
  });

  router.get("/generate-assets/badges", async (req, res) => {
    res
      .status(200)
      .send(renderMarkup(renderToString(await GenerateBadges(schema))));
  });

  router.get("/generate-assets/schedule", async (req, res) => {
    res
      .status(200)
      .send(renderMarkup(renderToString(await GenerateSchedule(schema))));
  });

  router.get("/generate-assets/presentation", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GeneratePresentation())));
  });

  router.get("/generate-assets/text", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateText())));
  });
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
    </body>
  </html>`;
}

export default routeAssetGenerator;
