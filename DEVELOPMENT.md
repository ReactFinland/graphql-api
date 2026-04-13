# Development

## Local development

Use the Worker runtime for local development:

1. Use Node.js 24, for example with `nvm use`.
2. Install dependencies with `npm install`.
3. Authenticate Wrangler with `npx wrangler login`.
4. Start the Worker locally with `npm run cf:dev`.

Wrangler uses [wrangler.jsonc](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/wrangler.jsonc) and serves public image assets from the repository through the static-assets configuration in [.assetsignore](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.assetsignore).

Useful local endpoints:

- `http://localhost:8787/calendar-2026.ics`
- `http://localhost:8787/media/people/kenw.jpg`

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
- routes `/graphql`, `/ping`, and `/calendar-2026.ics` through the Worker
- serves only image files under `/media/*` from static assets in the repository
- reuses a cached Worker handler per isolate instead of rebuilding the schema on each request
- emits structured console logs with Cloudflare Workers observability enabled

If you want a different Worker name, change the `name` field in `wrangler.jsonc`.
Set the runtime token before deploy with `npx wrangler secret put TOKEN`.
For local Worker development, provide the same value in `.dev.vars` or `.env` so Wrangler can load it into the Worker `env` bindings.

### Deploy

Run:

```sh
npm run cf:deploy
```

That executes `wrangler deploy` using the checked-in configuration.
If `REBUILD_SITES` is set, the deploy script also `POST`s each comma-separated deploy hook URL after the Worker deployment succeeds.

### Verify after deploy

Check these endpoints on the deployed domain:

- `/graphql`
- `/ping`
- `/calendar-2026.ics`
- `/media/people/kenw.jpg`

Note that the first two require a `TOKEN` header.

## Quality checks

Before deploying or after larger refactors, run:

```sh
npm run quality:gate
```

That executes the checked-in CI workflow locally through `agent-ci`.

If you only want the direct checks without the local CI wrapper, run:

```sh
npm run quality:gate:fast
```

## Environment variables

The application requires a `TOKEN` value at runtime for protected Worker-handled routes. `/calendar-2026.ics` and `/media/*` are public.

For local Wrangler development, provide the values in `.dev.vars` or `.env`. The example in [.env.template](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/.env.template) is:

- `TOKEN` for authenticating protected Worker-handled routes through a `TOKEN` request header
- `REBUILD_SITES` for optional comma-separated downstream Cloudflare deploy hooks triggered after `npm run cf:deploy`
