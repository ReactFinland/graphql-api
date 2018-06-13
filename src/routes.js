// @flow
const crypto = require("crypto");
const path = require("path");
const express = require("express");
const graphql = require("express-graphql");
const cors = require("cors");
const Heroku = require("heroku-client");
const { redirectToHTTPS } = require("express-http-to-https");
const schema = require("./schema");
const conferences = require("./conferences");

const calendar = require("./calendar");
const logger = require("./logger");
const rebuildSite = require("./rebuild-site");

const herokuClient = new Heroku({ token: process.env.HEROKU_API_TOKEN });

function createRouter() {
  const router = new express.Router();

  router.use(cors());
  router.use(redirectToHTTPS([/localhost:(\d{4})/]));

  router.all(
    "/graphql",
    graphql(request => ({
      graphiql: true,
      pretty: true,
      schema: schema,
      context: {
        hostname: getHostname(request),
        mediaUrl: `${getHostname(request)}/media`,
      },
    }))
  );

  router.all("/calendar/:id", (req, res) => {
    const conference = conferences[req.params.id];
    if (conference) {
      calendar({
        filename: `calendar-${conference.content.id}`,
        title: conference.content.name,
        schedules: conference.content.schedules,
      })(req, res);
    } else {
      res.status(404).end("Not found");
    }
  });

  router.use("/media/", (req, res, next) => {
    express.static(path.resolve(__dirname, "../media"))(req, res, next);
  });

  // Deprecated legacy APIs for React Finland 2018
  router.all(
    "/graphql-2018",
    graphql({
      graphiql: process.env.NODE_ENV === "development",
      pretty: true,
      schema: conferences["react-finland-2018"].schema.executable(),
    })
  );

  const calendarFile = "calendar-2018.ics";
  router.all(
    `/${calendarFile}`,
    calendar({
      filename: calendarFile,
      title: "React Finland 2018",
      schedules: conferences["react-finland-2018"].content.schedules,
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
    const body = req.body;
    const appId = process.env.HEROKU_APP_ID;
    const dynoId = process.env.HEROKU_DYNO_ID;

    // Restarting is allowed only on publish
    if (body.event !== "package:publish") {
      res.sendStatus(401);
    }

    // https://github.com/npm/npm-hook-receiver/blob/master/index.js#L24
    const secret =
      "sha256=" +
      crypto
        .createHmac("sha256", process.env.SECRET)
        .update(JSON.stringify(body))
        .digest("hex");
    const signature = req.get("x-npm-signature");

    logger.info(
      `Trying to restart server with app id ${appId}, dyno id ${dynoId}`
    );

    if (signature === secret) {
      logger.info("Secret matched to signature, restarting");

      herokuClient
        .delete(`/apps/${appId}/dynos/${dynoId}`)
        .then(() => {
          rebuildSite(process.env.REBUILD_SITE);

          res.sendStatus(200);
        })
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

function getHostname(req) {
  if (process.env.HEROKU_HOSTNAME) {
    return process.env.HEROKU_HOSTNAME;
  } else {
    return req.protocol + "://" + req.get("host");
  }
}

module.exports = createRouter;
