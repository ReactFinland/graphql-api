// import { renderToString } from "react-dom/server";

function routeAssetGenerator(router) {
  router.get("/generate-assets", (req, res) => {
    // TODO: Generate a script and link to it here.
    res.status(200).send(renderMarkup("hello world")); // renderToString("hello world")));
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
      <script src="./index.js"></script>
    </body>
  </html>`;
}

export default routeAssetGenerator;
