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

  interface AssetQuery {
    conferenceSeriesId: string;
    conferenceId: string;
    templateId: string;
    contactName: string;
    day: string;
  }

  router.get(
    "/asset-designer",
    validate.query({
      conferenceSeriesId: { type: String, default: "react-finland" },
      conferenceId: { type: String, default: "react-finland-2019" },
      templateId: { type: String, default: "theme" },
      // TODO
      contactName: { type: String, default: "Carolyn Stransky" },
      // TODO:
      day: { type: String, default: "2019-04-25" },
    }),
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
              props={{ theme, themes, selected }}
              component={AssetDesignerPage}
            />
          )
        );
    }
  );
}

export default routeAssetDesigner;
