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
import scheduleQuery from "./queries/scheduleQuery";

function createConnect(schema) {
  const connect = (query, context) =>
    graphql(schema, query, null, null, context);

  return connect;
}

function routeAssetGenerator(router, schema) {
  const connect = createConnect(schema);

  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<IndexPage />)));
  });

  router.get("/generate-assets/badges", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<BadgesPage />)));
  });

  // TODO: Fetch the data here
  router.get("/generate-assets/schedule", async (req, res) => {
    // TODO: Parse context data from a query and expose it to UI
    const result = await connect(
      scheduleQuery,
      {
        conferenceSeriesId: "graphql-finland",
        conferenceId: "graphql-finland-2018",
        day: "2018-10-19",
      }
    );
    const data = result.data || {};
    const theme = data.theme;

    res.status(200).send(
      renderMarkup(
        renderToString(
          <>
            <GlobalStyles theme={theme} />
            <SchedulePage
              intervals={data.schedule.intervals}
              conferenceLogo={theme.whiteLogoWithText.url}
              theme={theme}
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
