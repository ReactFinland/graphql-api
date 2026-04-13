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
- `REBUILD_SITES` for optional comma-separated downstream Cloudflare deploy hooks

For production deploys, store `TOKEN` and optional `REBUILD_SITES` in Cloudflare Worker secrets with `wrangler secret put ...`. Keep `TOKEN` available in your local shell when running `npm run cf:deploy`, because the deploy script uses it to call the Worker's internal post-deploy rebuild endpoint after `wrangler deploy`.
