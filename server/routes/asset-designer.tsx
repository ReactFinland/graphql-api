import crypto from "crypto";
import expeditousEngineMemory from "expeditious-engine-memory";
import getExpeditiousCache from "express-expeditious";
import isvalid from "isvalid";
import fromPairs from "lodash/fromPairs";
import * as React from "react";
import createInteractive from "./components/Interactive";
import createConnection from "./create-connection";
import AssetDesignerPage from "./pages/AssetDesignerPage";
import * as queries from "./queries";
import renderPage from "./render-page";
import * as templates from "./templates";

const cache = getExpeditiousCache({
  namespace: "assetdesignercache",
  defaultTtl: "1 year", // Cache till next restart
  engine: expeditousEngineMemory(), // TODO: Set up Redis
});

async function routeAssetDesigner(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);
  const connection = createConnection(schema);

  interface AssetQuery {
    conferenceSeriesId: string;
    conferenceId: string;
    templateId: string;
    contactName: string;
    day: string;
  }

  router.get(
    "/asset-designer",
    cache.withTtl("1 hour"),
    async (req, res, next) => {
      const query = req.query;
      const selectedTemplate = templates[query.templateId];
      const additionalQueryParameters = getAdditionalQueryParameters(
        selectedTemplate
      );

      isvalid(query, {
        conferenceSeriesId: { type: String, default: "react-finland" },
        conferenceId: { type: String, default: "react-finland-2019" },
        templateId: { type: String, default: "theme" },
        contactName: { type: String, default: "" },
        day: { type: String, default: "" },
        ...additionalQueryParameters,
      })
        .then(query => {
          req.query = query;

          next();
        })
        .catch(err => {
          req.query = undefined;

          next(err);
        });
    },
    async (req, res) => {
      const selected: AssetQuery = req.query;

      // TODO: Redirect with query visible instead of defaulting?
      const [err, connect] = await connection(
        [queries.themeQuery, queries.themesQuery],
        selected
      );

      if (err) {
        return res.status(400).send();
      }

      // TODO: Drop theme from here and handle <GlobalStyles /> inside asset designer
      const { theme } = connect(queries.themeQuery);
      const { themes } = connect(queries.themesQuery);

      // Given we use the same page for serving different bundles,
      // each needs a unique identifier based on the query (differing part)
      res.status(200).send(
        renderPage(
          req.url,
          theme,
          <Interactive
            relativeComponentPath="./pages/AssetDesignerPage"
            props={{ themes, initialSelected: selected }}
            component={AssetDesignerPage}
            componentHash={crypto
              .createHash("md5")
              .update(JSON.stringify(selected))
              .digest("hex")}
          />
        )
      );
    }
  );
}

function getAdditionalQueryParameters(template) {
  if (!template) {
    return {};
  }

  return fromPairs(
    template.variables
      .map(({ id, validation }) => (id && validation ? [id, validation] : null))
      .filter(Boolean)
  );
}

export default routeAssetDesigner;
