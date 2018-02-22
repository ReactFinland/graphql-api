// @flow
const crypto = require("crypto");
const path = require("path");
const express = require("express");
const graphql = require("express-graphql");
const cors = require("cors");
const Heroku = require("heroku-client");
const { redirectToHTTPS } = require("express-http-to-https");
const { schema, content } = require("@react-finland/content-2018");

const calendar = require("./calendar");
const logger = require("./logger");

const herokuClient = new Heroku({ token: process.env.HEROKU_API_TOKEN });

function createRouter() {
  const router = new express.Router();

  router.use(cors());
  router.use(redirectToHTTPS([/localhost:(\d{4})/]));

  router.all(
    "/graphql-2018",
    graphql({
      graphiql: process.env.NODE_ENV === "development",
      pretty: true,
      schema: schema.executable(),
    })
  );

  const calendarFile = "calendar-2018.ics";
  router.all(
    `/${calendarFile}`,
    calendar({
      filename: calendarFile,
      title: "React Finland 2018",
      location: "Valkoinen Sali, Aleksanterinkatu, Helsinki, Finland",
      schedules: content.schedules,
    })
  );

  router.use(
    "/graphql-2018/images",
    express.static(
      path.resolve(
        __dirname,
        "..",
        "node_modules",
        "@react-finland/content-2018/images"
      )
    )
  );

  router.post("/webhooks/restart-server", (req, res) => {
    const appId = process.env.HEROKU_APP_ID;
    const dynoId = process.env.HEROKU_DYNO_ID;

    // https://github.com/npm/npm-hook-receiver/blob/master/index.js#L24
    const secret =
      "sha256=" +
      crypto
        .createHmac("sha256", process.env.SECRET)
        .update(JSON.stringify(req.body))
        .digest("hex");
    const signature = req.get("x-npm-signature");

    if (signature === secret) {
      herokuClient
        .delete(`/apps/${appId}/dynos/${dynoId}`)
        .then(() => res.sendStatus(200))
        .catch(err => {
          logger.error(err);

          res.sendStatus(401);
        });
    } else {
      res.json({
        title: "Restart server",
        description: "Pass the right 'x-npm-signature' to restart",
      });
    }
  });

  return router;
}

module.exports = createRouter;
