import expeditousEngineMemory from "expeditious-engine-memory";
import getExpeditiousCache from "express-expeditious";
import isvalid from "isvalid";
import fromPairs from "lodash/fromPairs";
import * as React from "react";
import "reflect-metadata"; // Needed for introspecting classes
import * as components from "./components";
import createInteractive from "./components/Interactive";
import AssetDesignerPage from "./pages/AssetDesignerPage";
import renderPage from "./render-page";
import * as templates from "./templates";

const cache = getExpeditiousCache({
  namespace: "assetdesignercache",
  defaultTtl: "1 year", // Cache till next restart
  engine: expeditousEngineMemory(), // TODO: Set up Redis
});

async function routeAssetDesigner(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);

  interface AssetQuery {
    selectionId: string;
    variables: { [key: string]: any };
  }

  router.get(
    "/asset-designer",
    cache.withTtl("1 hour"),
    async (req, res, next) => {
      const query = req.query;
      const selectedComponent =
        templates[query.selectionId] || components[query.selectionId];
      const variables = getAdditionalQueryParameters(selectedComponent);

      const parsedQuery = {
        variables: req.query.variables ? JSON.parse(req.query.variables) : {},
      };

      isvalid(parsedQuery, {
        type: Object,
        unknownKeys: "remove", // allow/deny/remove
        schema: {
          selectionId: { type: String, default: "ThemeTemplate" },
          themeId: { type: String, default: "react-finland" },
          variables: {
            type: Object,
            schema: variables,
          },
        },
      })
        .then(query => {
          req.query = query;

          next();
        })
        .catch(err => {
          console.log(query, parsedQuery, err);

          req.query = undefined;

          next(err);
        });
    },
    async (req, res) => {
      const { selectionId, variables }: AssetQuery = req.query;

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
    }
  );
}

function getAdditionalQueryParameters(template) {
  if (!template || !template.variables) {
    return {};
  }

  return fromPairs(
    template.variables
      .map(({ id, validation }) => (id && validation ? [id, validation] : null))
      .filter(Boolean)
  );
}

export default routeAssetDesigner;
