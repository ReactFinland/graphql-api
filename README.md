# GraphQL API for TOSKA conferences

This repository serves conference data over GraphQL and exposes a small set of supporting routes:

- `/graphql`
- `/ping`
- `/calendar/:id`
- `/calendar-2026.ics`
- `/media/*`

## Local development

### Node.js server

Use the original Node.js server for local development:

1. Install dependencies with `npm install`.
2. Start the server with `NODE_ENV=development npm start`.
3. Open `http://localhost:3000/graphql`.

Other useful local endpoints:

- `http://localhost:3000/calendar-2026.ics`
- `http://localhost:3000/media/people/kenw.jpg`

### Cloudflare Worker

Use the Worker runtime when you want to verify the Cloudflare deployment path locally:

1. Install dependencies with `npm install`.
2. Authenticate Wrangler with `npx wrangler login`.
3. Start the Worker locally with `npm run cf:dev`.

Wrangler uses [wrangler.jsonc](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/wrangler.jsonc) and serves media files from the repository root through the static-assets configuration in [.assetsignore](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.assetsignore).

## Deploying to Cloudflare

### Prerequisites

- A Cloudflare account with Workers enabled
- Node.js and npm installed
- Dependencies installed with `npm install`
- Wrangler authenticated with `npx wrangler login`

### Configure the Worker

The project already includes a Worker entrypoint at [worker/index.ts](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/worker/index.ts) and a Wrangler configuration at [wrangler.jsonc](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/wrangler.jsonc).

The current configuration:

- runs the Express app inside Cloudflare Workers using `cloudflare:node`
- routes `/graphql`, `/ping`, and calendar endpoints through the Worker
- serves `/media/*` from static assets in the repository

If you want a different Worker name, change the `name` field in `wrangler.jsonc`.

### Deploy

Run:

```sh
npm run cf:deploy
```

That executes `npx wrangler deploy` using the checked-in configuration.

### Verify after deploy

Check these endpoints on the deployed domain:

- `/graphql`
- `/ping`
- `/calendar-2026.ics`
- `/media/people/kenw.jpg`

## Environment variables

The application does not currently require Cloudflare Worker secrets for runtime startup.

The `.env` file is only relevant for local scripts and the Node.js entrypoint. The example in [.env.template](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.env.template) is:

- `TITO_TOKEN` for Tito-related utility scripts
- `REBUILD_SITES` for optional comma-separated webhook URLs that should be `POST`ed once after the Node server starts in production

## Notes

- The old asset designer route has been removed.
- Legacy platform-specific deployment files and workflow have been removed.
- If you rely on attendee CSV files, verify that they are available in the deployment environment before using attendee-related GraphQL queries.
