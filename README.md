# GraphQL API for TOSKA conferences

Simple GraphQL API for our conferences:

To see the query API:

1. `NODE_ENV="development" npm start`
2. `http://localhost:3000/graphql` or `http://localhost:3000/calendar-2022.ics` (calendar)

## Asset Designer

You can access the asset designer through `http://localhost:3000/asset-designer`.

## Image Processing

There's no special image processing in place at the moment.

> You can access images through `http://localhost:3000/media`. Example: `http://localhost:3000/media/people/kenw.jpg`.

## Webhooks

See the webhooks below.

### Heroku to Netlify

The API has been connected to the site using a webhook so that it builds whenever the API changes:

- `heroku config:set REBUILD_SITES=<Netlify urls separate by comma go here> -a react-finland-api`

> Remember to run the server in production mode. That will enable site rebuilding hook!
