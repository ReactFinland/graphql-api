import expeditousEngineMemory from "expeditious-engine-memory";
import getExpeditiousCache from "express-expeditious";
import * as React from "react";
import "reflect-metadata"; // Needed for introspecting classes
import createInteractive from "./components/Interactive";
import AssetDesignerPage from "./pages/AssetDesignerPage";
import renderPage from "./render-page";

const cache = getExpeditiousCache({
  namespace: "assetdesignercache",
  defaultTtl: "1 year", // Cache till next restart
  engine: expeditousEngineMemory(), // TODO: Set up Redis
});

async function routeAssetDesigner(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);

  router.get("/asset-designer", cache.withTtl("1 hour"), async (req, res) => {
    const selectionId: string = req.query.selectionId;
    const variables: { [key: string]: any } = req.query.variables
      ? JSON.parse(req.query.variables)
      : {};

    // Given we use the same page for serving different bundles,
    // each needs a unique identifier based on the query (differing part)
    res
      .status(200)
      .send(
        renderPage(
          "Asset designer",
          req.url,
          <Interactive
            relativeComponentPath="./pages/AssetDesignerPage"
            props={{ initialState: { selectionId, variables } }}
            component={AssetDesignerPage}
            componentHash={selectionId}
          />
        )
      );
  });
}

export default routeAssetDesigner;
