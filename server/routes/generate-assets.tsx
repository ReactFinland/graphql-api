import { validate } from "isvalid";
import * as React from "react";
import ConferenceSelector from "./components/ConferenceSelector";
import createInteractive from "./components/Interactive";
import createConnection from "./create-connection";
import BadgesPage from "./pages/BadgesPage";
import HeaderPage from "./pages/HeaderPage";
import IndexPage from "./pages/IndexPage";
import PresentationPage from "./pages/PresentationPage";
import SchedulePage from "./pages/SchedulePage";
import SpeakerTweetPage from "./pages/SpeakerTweetPage";
import TextPage from "./pages/TextPage";
import * as queries from "./queries";
import renderPage from "./render-page";

async function routeAssetGenerator(router, schema, projectRoot, scriptRoot) {
  const Interactive = createInteractive(projectRoot, scriptRoot, __dirname);
  const connection = createConnection(schema);

  router.get("/generate-assets", async (req, res) => {
    const [err, connect] = await connection([queries.themeQuery], {
      conferenceSeriesId: "react-finland",
    });

    if (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <IndexPage />));
  });

  router.get("/generate-assets/badges", async (req, res) => {
    const [err, connect] = await connection([queries.themeQuery], {
      conferenceSeriesId: "react-finland",
    });

    if (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <BadgesPage />));
  });

  interface ScheduleQuery {
    conferenceSeriesId: string;
    conferenceId: string;
    day: string;
  }

  router.get(
    "/generate-assets/schedule",
    validate.query({
      conferenceSeriesId: { type: String, default: "" },
      conferenceId: { type: String, default: "" },
      day: { type: String, default: "" },
    }),
    async (req, res) => {
      const query: ScheduleQuery = req.query;
      const parameters: ScheduleQuery = Object.values(query).some(Boolean)
        ? query
        : {
            conferenceSeriesId: "react-finland",
            conferenceId: "react-finland-2019",
            day: "2019-04-25",
          };

      const [err, connect] = await connection(
        [
          queries.conferenceDayQuery,
          queries.scheduleQuery,
          queries.themeQuery,
          queries.sponsorQuery,
        ],
        parameters
      );

      if (err) {
        return res.status(400).send();
      }

      const { schedule } = connect(queries.scheduleQuery);
      const { theme } = connect(queries.themeQuery);
      const sponsors = connect(queries.sponsorQuery).conference;
      const conferenceSeries = connect(queries.conferenceDayQuery).allSeries;
      const conferenceProps = { conferenceSeries, selection: parameters };

      // TODO: Set up interactive rendering for the selector
      res.status(200).send(
        renderPage(
          req.url,
          theme,
          <>
            <Interactive
              relativeComponentPath="./components/ConferenceSelector"
              props={conferenceProps}
              component={ConferenceSelector}
            />
            <SchedulePage
              day={dayToFinnishLocale(parameters.day)}
              intervals={schedule.intervals}
              theme={theme}
              sponsors={sponsors}
            />
          </>
        )
      );
    }
  );

  router.get("/generate-assets/presentation", async (req, res) => {
    const [err, connect] = await connection([queries.themeQuery], {
      conferenceSeriesId: "react-finland",
    });

    if (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <PresentationPage />));
  });

  router.get("/generate-assets/text", async (req, res) => {
    const [err, connect] = await connection([queries.themeQuery], {
      conferenceSeriesId: "react-finland",
    });

    if (err) {
      return res.status(400).send();
    }

    const { theme } = connect(queries.themeQuery);

    res.status(200).send(renderPage(req.url, theme, <TextPage />));
  });

  router.get("/generate-assets/speaker-tweet", async (req, res) => {
    const [err, connect] = await connection(
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

    if (err) {
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

export default routeAssetGenerator;
