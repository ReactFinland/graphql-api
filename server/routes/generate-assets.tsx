import * as React from "react";
import createConnection from "./create-connection";
import BadgesPage from "./pages/BadgesPage";
import IndexPage from "./pages/IndexPage";
import PresentationPage from "./pages/PresentationPage";
import TextPage from "./pages/TextPage";
import * as queries from "./queries";
import renderPage from "./render-page";

async function routeAssetGenerator(router, schema, projectRoot, scriptRoot) {
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
}

export default routeAssetGenerator;
