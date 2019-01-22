"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const express_http_to_https_1 = require("express-http-to-https");
const path = __importStar(require("path"));
const calendar_1 = __importDefault(require("./calendar"));
const conferences_1 = __importDefault(require("./conferences"));
const schema_1 = __importDefault(require("./schema"));
async function createRouter() {
    // @ts-ignore
    const router = new express_1.default.Router();
    const schema = await schema_1.default();
    router.use(cors_1.default());
    router.use(express_http_to_https_1.redirectToHTTPS([/localhost:(\d{4})/]));
    router.all("/graphql", (req, res, next) => {
        // Patch for app query. Once the app is updated, this can go away.
        req.body.query = patchQuery(req.body.query);
        next();
    }, express_graphql_1.default(request => ({
        graphiql: true,
        pretty: true,
        schema,
        context: {
            hostname: getHostname(request),
            mediaUrl: `${getHostname(request)}/media`,
        },
    })));
    router.all("/calendar/:id", (req, res) => {
        const conference = conferences_1.default[req.params.id];
        if (conference) {
            calendar_1.default({
                filename: `calendar-${conference.id}`,
                title: conference.name,
                schedules: conference.schedules,
            })(req, res);
        }
        else {
            res.status(404).end("Not found");
        }
    });
    // FIXME: Resolve media path against project root, not module as this is brittle
    router.use("/media", express_1.default.static(path.resolve(__dirname, "../../media")));
    // TODO: Make a better abstraction for this
    const calendarFile = "calendar-2019.ics";
    router.all(`/${calendarFile}`, calendar_1.default({
        filename: calendarFile,
        title: "React Finland 2019",
        schedules: conferences_1.default["react-finland-2019"].schedules,
    }));
    return router;
}
function getHostname(req) {
    if (process.env.HEROKU_HOSTNAME) {
        return process.env.HEROKU_HOSTNAME;
    }
    else {
        return req.protocol + "://" + req.get("host");
    }
}
// FIXME: Ideally this should traverse query tree and replace
// .. on Workshop and ... on Talk with a single query.
function patchQuery(query) {
    const q = `
  {
    conference(id: "react-finland-2019") {
      schedules {
        day
        intervals {
          begin
          end
          sessions {
            title
            description
            type
            ... on Workshop {
              speakers {
                name
                image {
                  url
                }
              }
            }
            ... on Talk {
              speakers {
                name
                image {
                  url
                }
              }
            }
            location {
              name
              city
              address
            }
          }
        }
      }
    }
  }
  `;
    if (!query) {
        return query;
    }
    if (q.replace(/(\n| )*/g, "") === query.replace(/(\n| )*/g, "")) {
        return `
    {
      conference(id: "react-finland-2019") {
        schedules {
          day
          intervals {
            begin
            end
            sessions {
              title
              description
              type
              speakers {
                name
                image {
                  url
                }
              }
              location {
                name
                city
                address
              }
            }
          }
        }
      }
    }
    `;
    }
    return query;
}
exports.default = createRouter;
//# sourceMappingURL=routes.js.map