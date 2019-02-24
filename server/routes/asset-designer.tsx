import { validate } from "isvalid";
import * as React from "react";
import createInteractive from "./components/Interactive";
import createConnection from "./create-connection";
import AssetDesignerPage from "./pages/AssetDesignerPage";
import * as queries from "./queries";
import renderPage from "./render-page";

async function routeAssetDesigner(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);
  const connection = createConnection(schema);

  router.get(
    "/asset-designer",
    validate.query({
      conferenceSeriesId: { type: String, default: "react-finland" },
    }),
    async (req, res) => {
      // TODO: Redirect with query visible instead of defaulting?
      const [err, connect] = await connection(
        [queries.themeQuery, queries.themesQuery],
        req.query
      );

      if (err) {
        return res.status(400).send();
      }

      const { theme } = connect(queries.themeQuery);
      const { themes } = connect(queries.themesQuery);

      res
        .status(200)
        .send(
          renderPage(
            req.url,
            theme,
            <Interactive
              relativeComponentPath="./pages/AssetDesignerPage"
              props={{ theme, themes }}
              component={AssetDesignerPage}
            />
          )
        );
    }
  );
}

export default routeAssetDesigner;
