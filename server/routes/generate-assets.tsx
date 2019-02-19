import { graphql } from "graphql";
import process from "process";
import * as React from "react";
import { renderToString } from "react-dom/server";
import ConferenceSelector from "./components/ConferenceSelector";
import GlobalStyles from "./components/GlobalStyles";
import Interactive from "./components/Interactive";
import BadgesPage from "./pages/BadgesPage";
import IndexPage from "./pages/IndexPage";
import PresentationPage from "./pages/PresentationPage";
import SchedulePage from "./pages/SchedulePage";
import SpeakerTweetPage from "./pages/SpeakerTweetPage";
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
    let connect;
    // TODO: Parse these from query + expose them to the user
    const selection = {
      conferenceSeriesId: "react-finland",
      conferenceId: "react-finland-2019",
      day: "2019-04-25",
    };
    try {
      connect = await createConnect(
        schema,
        {
          scheduleQuery: queries.scheduleQuery,
          themeQuery: queries.themeQuery,
          sponsorQuery: queries.sponsorQuery,
        },
        selection
      );
    } catch (err) {
      return res.status(404);
    }

    const { schedule } = connect(queries.scheduleQuery);
    const { theme } = connect(queries.themeQuery);
    const sponsors = connect(queries.sponsorQuery).conference;
    const conferenceSeries = connect(queries.conferenceDayQuery).allSeries;

    // TODO: Set up interactive rendering for the selector
    res.status(200).send(
      renderMarkup(
        renderToString(
          <>
            <Interactive component="./ConferenceSelector">
              <ConferenceSelector
                conferenceSeries={conferenceSeries}
                selection={selection}
              />
            </Interactive>
            <GlobalStyles theme={theme} />
            <SchedulePage
              day={parseDay(selection.day)}
              intervals={schedule.intervals}
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

  router.get("/generate-assets/speaker-tweet", async (req, res) => {
    let connect;
    try {
      // TODO: Parse these from query + expose them to the user
      connect = await createConnect(
        schema,
        {
          speakerTalkQuery: queries.speakerTalkQuery,
          themeQuery: queries.themeQuery,
          conferenceDaysQuery: queries.conferenceDaysQuery,
        },
        {
          conferenceSeriesId: "react-finland",
          conferenceId: "react-finland-2019",
          contactName: "Carolyn Stransky",
        }
      );
    } catch (err) {
      return res.status(404);
    }

    const {
      conference: { schedules },
    } = connect(queries.conferenceDaysQuery);
    const conferenceDays = schedules.map(({ day }) => dayToFinnishLocale(day));
    const { contact } = connect(queries.speakerTalkQuery);
    const { theme } = connect(queries.themeQuery);

    res.status(200).send(
      renderMarkup(
        renderToString(
          <>
            <GlobalStyles theme={theme} />
            <SpeakerTweetPage
              speaker={contact}
              theme={theme}
              conferenceDays={conferenceDays}
            />
          </>
        )
      )
    );
  });
}

function dayToFinnishLocale(day: string): string {
  const date = new Date(day);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

// This uses Finnish day format given ICU (i18n) isn't default in Node and
// it's complex to set up.
function parseDay(day) {
  const d = new Date(day);

  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
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

function reloadPage(): string {
  if (process.env.NODE_ENV === "production") {
    return "";
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
