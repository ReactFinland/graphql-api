import graphql from "express-graphql";
import process from "process";

function routeGraphQL(router, schema, mediaUrl) {
  router.all(
    "/graphql",
    (req, res, next) => {
      // Patch for app query. Once the app is updated, this can go away.
      req.body.query = patchQuery(req.body.query);

      next();
    },
    graphql(request => {
      const hostname = getHostname(request);

      return {
        graphiql: true,
        pretty: true,
        schema,
        context: {
          hostname,
          mediaUrl: `${hostname}${mediaUrl}`,
        },
      };
    })
  );
}

function getHostname(req) {
  if (process.env.HEROKU_HOSTNAME) {
    return process.env.HEROKU_HOSTNAME;
  } else {
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

export default routeGraphQL;
