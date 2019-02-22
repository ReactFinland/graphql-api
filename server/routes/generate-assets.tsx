import { graphql } from "graphql";
import { trimEnd } from "lodash";
import process from "process";
import * as React from "react";
import { renderToString } from "react-dom/server";
import ConferenceSelector from "./components/ConferenceSelector";
import GlobalStyles from "./components/GlobalStyles";
import createInteractive from "./components/Interactive";
import BadgesPage from "./pages/BadgesPage";
import HeaderPage from "./pages/HeaderPage";
import IndexPage from "./pages/IndexPage";
import PresentationPage from "./pages/PresentationPage";
import SchedulePage from "./pages/SchedulePage";
import SpeakerTweetPage from "./pages/SpeakerTweetPage";
import TextPage from "./pages/TextPage";
import * as queries from "./queries";

async function routeAssetGenerator(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot);

  router.get("/generate-assets", async (req, res) => {
    let connect;

    try {
      connect = await createConnect(schema, [queries.themeQuery], {
        conferenceSeriesId: "react-finland",
      });
    } catch (err) {
      return res.status(404).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <IndexPage />));
  });

  router.get("/generate-assets/badges", async (req, res) => {
    let connect;

    try {
      connect = await createConnect(schema, [queries.themeQuery], {
        conferenceSeriesId: "react-finland",
      });
    } catch (err) {
      return res.status(404);
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <BadgesPage />));
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
        [
          queries.conferenceDayQuery,
          queries.scheduleQuery,
          queries.themeQuery,
          queries.sponsorQuery,
        ],
        selection
      );
    } catch (err) {
      return res.status(400).send();
    }

    const { schedule } = connect(queries.scheduleQuery);
    const { theme } = connect(queries.themeQuery);
    const sponsors = connect(queries.sponsorQuery).conference;
    const conferenceSeries = connect(queries.conferenceDayQuery).allSeries;
    const conferenceProps = { conferenceSeries, selection };

    // TODO: Set up interactive rendering for the selector
    res.status(200).send(
      renderPage(
        req.url,
        theme,
        <>
          {" "}
          <Interactive component="./ConferenceSelector" props={conferenceProps}>
            <ConferenceSelector {...conferenceProps} />
          </Interactive>
          <SchedulePage
            day={dayToFinnishLocale(selection.day)}
            intervals={schedule.intervals}
            theme={theme}
            sponsors={sponsors}
          />
        </>
      )
    );
  });

  router.get("/generate-assets/presentation", async (req, res) => {
    let connect;

    try {
      connect = await createConnect(schema, [queries.themeQuery], {
        conferenceSeriesId: "react-finland",
      });
    } catch (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <PresentationPage />));
  });

  router.get("/generate-assets/text", async (req, res) => {
    let connect;

    try {
      connect = await createConnect(schema, [queries.themeQuery], {
        conferenceSeriesId: "react-finland",
      });
    } catch (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <TextPage />));
  });

  router.get("/generate-assets/speaker-tweet", async (req, res) => {
    let connect;
    try {
      // TODO: Parse these from query + expose them to the user
      connect = await createConnect(
        schema,
        [
          queries.speakerTalkQuery,
          queries.themeQuery,
          queries.conferenceDaysQuery,
        ],
        {
          conferenceSeriesId: "react-finland",
          conferenceId: "react-finland-2019",
          contactName: "Carolyn Stransky",
        }
      );
    } catch (err) {
      return res.status(400).send();
    }

    const {
      conference: { schedules },
    } = connect(queries.conferenceDaysQuery);
    const conferenceDays = schedules.map(({ day }) => dayToFinnishLocale(day));
    const { contact } = connect(queries.speakerTalkQuery);
    const { theme } = connect(queries.themeQuery);

    res
      .status(200)
      .send(
        renderPage(
          req.url,
          theme,
          <SpeakerTweetPage
            speaker={contact}
            theme={theme}
            conferenceDays={conferenceDays}
          />
        )
      );
  });

  router.get("/generate-assets/header", async (req, res) => {
    let connect;
    try {
      // TODO: Parse these from query + expose them to the user
      connect = await createConnect(
        schema,
        [queries.themeQuery, queries.conferenceDaysQuery],
        {
          conferenceSeriesId: "react-finland",
          conferenceId: "react-finland-2019",
        }
      );
    } catch (err) {
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
    const { theme } = connect(queries.themeQuery);

    res
      .status(200)
      .send(
        renderPage(
          req.url,
          theme,
          <HeaderPage
            theme={theme}
            conferenceDays={conferenceDays}
            location={location}
            slogan={slogan}
            coupon="PITERJS"
          />
        )
      );
  });
}

// This uses Finnish day format given ICU (i18n) isn't default in Node and
// it's complex to set up.
function dayToFinnishLocale(day: string): string {
  const date = new Date(day);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

// Cache query results so connect can be used in a synchronous way
// later in the code.
async function createConnect(schema, queries: string[], context) {
  const results = {};

  await Promise.all(
    queries.map(query =>
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

function renderPage(baseUrl, theme, page) {
  return renderMarkup(
    renderToString(
      <>
        <GlobalStyles theme={theme} />
        {page}
      </>
    ),
    baseUrl
  );
}

function renderMarkup(html, hostname) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Asset generator</title>
      <meta charset="utf-8" />
      <base href="${cleanBase(hostname)}/" />
      ${reloadPage()}
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}

function cleanBase(hostname) {
  return trimEnd(hostname.split("?")[0], "/");
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
