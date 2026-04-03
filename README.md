# GraphQL API for TOSKA conferences

This repository serves conference data over GraphQL and exposes a small set of supporting routes:

- `/graphql`
- `/ping`
- `/calendar/:id`
- `/calendar-2026.ics`
- `/media/*`

## Local development

### Cloudflare Worker

Use the Worker runtime for local development:

1. Use Node.js 24, for example with `nvm use`.
2. Install dependencies with `npm install`.
3. Authenticate Wrangler with `npx wrangler login`.
4. Start the Worker locally with `npm run cf:dev`.

Wrangler uses [wrangler.jsonc](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/wrangler.jsonc) and serves public image assets from the repository through the static-assets configuration in [.assetsignore](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.assetsignore).

Before deploying or after larger refactors, run `npm run quality:gate` to execute both typechecks and the API test suite.

Other useful local endpoints:

- `http://localhost:8787/calendar-2026.ics`
- `http://localhost:8787/media/people/kenw.jpg`

### Node.js fallback

If you need to run the old Node entrypoint directly:

1. Use Node.js 24, for example with `nvm use`.
2. Install dependencies with `npm install`.
3. Compile the project with `npx tsc`.
4. Start the compiled server with `node build/server`.

## Deploying to Cloudflare

### Prerequisites

- A Cloudflare account with Workers enabled
- Node.js 24 and npm installed
- Dependencies installed with `npm install`
- Wrangler authenticated with `npx wrangler login`
- A `TOKEN` secret configured for the Worker

### Configure the Worker

The project already includes a Worker entrypoint at [worker/index.ts](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/worker/index.ts) and a Wrangler configuration at [wrangler.jsonc](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/wrangler.jsonc).

The current configuration:

- runs a fetch-native request handler in Cloudflare Workers
- routes `/graphql`, `/ping`, and calendar endpoints through the Worker
- serves only image files under `/media/*` from static assets in the repository
- reuses a cached Worker handler per isolate instead of rebuilding the schema on each request

If you want a different Worker name, change the `name` field in `wrangler.jsonc`.
Set the runtime token before deploy with `npx wrangler secret put TOKEN`.
For local Worker development, provide the same value in `.dev.vars` or `.env` so Wrangler can load it into the Worker `env` bindings.

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

The application requires a `TOKEN` value at runtime for all non-media routes.

The `.env` file is only relevant for local scripts and the Node.js entrypoint. The example in [.env.template](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.env.template) is:

- `TOKEN` for authenticating all non-media routes through a `TOKEN` request header
- `TITO_TOKEN` for Tito-related utility scripts
- `REBUILD_SITES` for optional comma-separated webhook URLs that should be `POST`ed once after the Node server starts in production

## Notes

- The old asset designer route has been removed.
- Legacy platform-specific deployment files and workflow have been removed.
- If you rely on attendee CSV files, verify that they are available in the deployment environment before using attendee-related GraphQL queries.
