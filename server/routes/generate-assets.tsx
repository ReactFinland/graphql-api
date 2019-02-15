import { graphql } from "graphql";
import process from "process";
import * as React from "react";
import { renderToString } from "react-dom/server";
import GlobalStyles from "./components/GlobalStyles";
import BadgesPage from "./pages/BadgesPage";
import IndexPage from "./pages/IndexPage";
import PresentationPage from "./pages/PresentationPage";
import SchedulePage from "./pages/SchedulePage";
import TextPage from "./pages/TextPage";
import * as queries from "./queries";

async function routeAssetGenerator(router, schema) {
  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<IndexPage />)));
  });

  router.get("/generate-assets/badges", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<BadgesPage />)));
  });

  router.get("/generate-assets/schedule", async (req, res) => {
    // TODO: Parse these from query + expose them to the user
    const connect = await createConnect(schema, queries, {
      conferenceSeriesId: "react-finland",
      conferenceId: "react-finland-2019",
      day: "2019-04-25",
    });
    const { schedule, theme } = connect(queries.scheduleQuery);
    const sponsors = connect(queries.sponsorQuery).conference;

    res.status(200).send(
      renderMarkup(
        renderToString(
          <>
            <GlobalStyles theme={theme} />
            <SchedulePage
              intervals={schedule.intervals}
              conferenceLogo={theme.whiteLogoWithText.url}
              theme={theme}
              sponsors={sponsors}
            />
          </>
        )
      )
    );
  });

  router.get("/generate-assets/presentation", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<PresentationPage />)));
  });

  router.get("/generate-assets/text", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<TextPage />)));
  });
}

// Cache query results so connect can be used in a synchronous way
// later in the code.
async function createConnect(
  schema,
  queries: { [key: string]: string },
  context
) {
  const results = {};

  await Promise.all(
    Object.values(queries).map(query =>
      graphql(schema, query, null, null, context).then(({ data, errors }) => {
        if (errors) {
          throw new Error(errors && errors.toString());
        }

        return {
          query,
          data,
        };
      })
    )
  ).then(values => {
    values.forEach(({ query, data }) => {
      results[query] = data;
    });
  });

  await Object.values(queries).forEach(async query => {
    const result = await graphql(schema, query, null, null, context);

    results[query] = result.data;
  });

  return query => results[query];
}

function renderMarkup(html) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Asset generator</title>
      <meta charset="utf-8" />
      ${reloadPage()}
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}

function reloadPage() {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  return `
    <script>
      let previousVersion;

      setInterval(() => {
        fetch('/ping').then(response => response.json())
        .then(({ serverVersion }) => {
          if (previousVersion) {
            if (previousVersion !== serverVersion) {
              location.reload();
            }
          }
          else {
            previousVersion = serverVersion;
          }
        }).catch(err => {
          // It's fine.
        })
      }, 500);
    </script>
  `;
}

export default routeAssetGenerator;
