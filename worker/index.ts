import createRequestHandler from "../server/create-request-handler";
import { withDefaultHeaders } from "../server/create-request-handler";

interface Env {
  TOKEN: string;
  REBUILD_SITES?: string;
}

const REBUILD_TRIGGER_PATH = "/__internal/rebuild-sites";

let cachedToken: string | undefined;
let handleRequestPromise: ReturnType<typeof createRequestHandler> | undefined;

function getHandleRequest(env: Env) {
  if (!handleRequestPromise || cachedToken !== env.TOKEN) {
    cachedToken = env.TOKEN;
    handleRequestPromise = createRequestHandler({
      expectedToken: env.TOKEN,
      projectRoot: "/bundle",
    });
  }

  return handleRequestPromise;
}

export default {
  async fetch(request: Request, env: Env) {
    const pathname = new URL(request.url).pathname;

    if (pathname === REBUILD_TRIGGER_PATH) {
      return handleRebuildSitesRequest(request, env);
    }

    const handleRequest = await getHandleRequest(env);

    return handleRequest(request);
  },
};

async function handleRebuildSitesRequest(request: Request, env: Env) {
  if (request.method !== "POST") {
    return withDefaultHeaders(
      new Response("Method not allowed", {
        headers: {
          allow: "POST",
        },
        status: 405,
      })
    );
  }

  if (!hasValidToken(request, env.TOKEN)) {
    return withDefaultHeaders(new Response("Unauthorized", { status: 401 }));
  }

  const result = await triggerRebuildHooks(parseHookUrls(env.REBUILD_SITES));

  return withDefaultHeaders(
    Response.json(result, {
      status: result.failures.length > 0 ? 502 : 200,
    })
  );
}

async function triggerRebuildHooks(urls: string[]) {
  if (urls.length === 0) {
    return {
      buildIds: [],
      failures: [],
      skipped: true,
      triggered: 0,
    };
  }

  const buildIds: string[] = [];
  const failures: string[] = [];

  for (const [index, url] of urls.entries()) {
    const hookLabel = `${index + 1}/${urls.length}`;

    try {
      const payload = await postDeployHook(url);
      const buildId = payload?.result?.build_uuid;

      if (typeof buildId === "string" && buildId.length > 0) {
        buildIds.push(buildId);
      }
    } catch (error) {
      failures.push(`${hookLabel}: ${formatError(error)}`);
    }
  }

  return {
    buildIds,
    failures,
    skipped: false,
    triggered: urls.length - failures.length,
  };
}

async function postDeployHook(url: string) {
  const response = await fetch(url, { method: "POST" });
  const payload = await readJsonIfPossible(response);

  if (!response.ok) {
    const details =
      payload && typeof payload === "object"
        ? JSON.stringify(payload)
        : response.statusText;

    throw new Error(`HTTP ${response.status} ${details}`.trim());
  }

  return payload;
}

async function readJsonIfPossible(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function parseHookUrls(value: string | undefined) {
  if (typeof value !== "string") {
    return [];
  }

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function hasValidToken(request: Request, expectedToken?: string) {
  return Boolean(
    expectedToken && request.headers.get("TOKEN") === expectedToken
  );
}

function formatError(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
