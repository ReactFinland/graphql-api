# GraphQL API for TOSKA conferences

This repository serves conference data over GraphQL and exposes a small set of supporting routes:

- `/graphql`
- `/ping`
- `/calendar-2026.ics`
- `/media/*`

Development setup lives in [DEVELOPMENT.md](/Users/juhovepsalainen/Projects/future-frontend/graphql-api/DEVELOPMENT.md).

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

## License

MIT.
