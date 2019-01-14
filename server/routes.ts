import cors from "cors";
import express from "express";
import graphql from "express-graphql";
import { redirectToHTTPS } from "express-http-to-https";
import * as path from "path";
import calendar from "./calendar";
import conferences from "./conferences";
import generateSchema from "./schema";

async function createRouter() {
  const router = new express.Router();
  const schema = await generateSchema();

  router.use(cors());
  router.use(redirectToHTTPS([/localhost:(\d{4})/]));

  router.all(
    "/graphql",
    graphql(request => ({
      graphiql: true,
      pretty: true,
      schema,
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
        filename: `calendar-${conference.id}`,
        title: conference.name,
        schedules: conference.schedules,
      })(req, res);
    } else {
      res.status(404).end("Not found");
    }
  });

  router.use("/media/", (req, res, next) => {
    express.static(path.resolve(__dirname, "../media"))(req, res, next);
  });

  // TODO: Make a better abstraction for this
  const calendarFile = "calendar-2019.ics";
  router.all(
    `/${calendarFile}`,
    calendar({
      filename: calendarFile,
      title: "React Finland 2019",
      schedules: conferences["react-finland-2019"].schedules,
    })
  );

  return router;
}

function getHostname(req) {
  if (process.env.HEROKU_HOSTNAME) {
    return process.env.HEROKU_HOSTNAME;
  } else {
    return req.protocol + "://" + req.get("host");
  }
}

export default createRouter;
