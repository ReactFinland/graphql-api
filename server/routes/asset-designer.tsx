import { validate } from "isvalid";
import * as React from "react";
import createInteractive from "./components/Interactive";
import createConnection from "./create-connection";
import AssetDesignerPage from "./pages/AssetDesignerPage";
import * as queries from "./queries";
import renderPage from "./render-page";

// HeaderTemplate data reqs
/*
    const [err, connect] = await connection(
      [queries.themeQuery, queries.conferenceDaysQuery],
      {
        conferenceSeriesId: "react-finland",
        conferenceId: "react-finland-2019",
      }
    );

    if (err) {
      return res.status(400).send();
    }

    const {
      conference: { locations, schedules, slogan },
    } = connect(queries.conferenceDaysQuery);
    const location = locations[0]
      ? {
          city: locations[0].city,
          country: locations[0].country.name,
        }
      : {};
    const conferenceDays = schedules.map(({ day }) => dayToFinnishLocale(day));
    const { theme } = connect(queries.themeQuery)


    // We can use browser here instead?
function dayToFinnishLocale(day: string): string {
  const date = new Date(day);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
*/

async function routeAssetDesigner(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);
  const connection = createConnection(schema);

  router.get(
    "/asset-designer",
    validate.query({
      conferenceSeriesId: { type: String, default: "react-finland" },
      conferenceId: { type: String, default: "react-finland-2019" },
      templateId: { type: String, default: "theme" },
    }),
    async (req, res) => {
      const selected = req.query;

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
