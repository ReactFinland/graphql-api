import { spawnSync } from "node:child_process";
import { constants as fsConstants } from "node:fs";
import { accessSync } from "node:fs";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const REBUILD_TRIGGER_PATH = "/__internal/rebuild-sites";
const WRANGLER_CONFIG_URL = new URL("../wrangler.jsonc", import.meta.url);

loadOptionalEnvFiles([".env", ".dev.vars"]);

if (isEntrypoint()) {
  await main();
}

export async function main() {
  runWranglerDeploy();
  await triggerPostDeployRebuilds();
}

function runWranglerDeploy() {
  const result = spawnSync(getWranglerCommand(), ["deploy"], {
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

async function triggerRebuildHooks(urls) {
  if (urls.length === 0) {
    console.log("[cf:deploy] No REBUILD_SITES configured, skipping downstream rebuilds.");
    return;
  }

  console.log(
    `[cf:deploy] Triggering ${urls.length} downstream rebuild${urls.length === 1 ? "" : "s"}.`
  );

  const failures = [];

  for (const [index, url] of urls.entries()) {
    const hookLabel = `${index + 1}/${urls.length}`;

    console.log(`[cf:deploy] Triggering downstream rebuild ${hookLabel}.`);

    try {
      const payload = await postDeployHook(url);
      const buildId = payload?.result?.build_uuid;

      if (typeof buildId === "string" && buildId.length > 0) {
        console.log(
          `[cf:deploy] Downstream rebuild ${hookLabel} accepted with build ${buildId}.`
        );
      } else {
        console.log(`[cf:deploy] Downstream rebuild ${hookLabel} accepted.`);
      }
    } catch (error) {
      failures.push(hookLabel);
      console.error(
        `[cf:deploy] Downstream rebuild ${hookLabel} failed: ${formatError(error)}`
      );
    }
  }

  if (failures.length > 0) {
    throw new Error(
      `[cf:deploy] Failed to trigger downstream rebuilds: ${failures.join(", ")}`
    );
  }
}

async function triggerPostDeployRebuilds() {
  const workerOrigin = getWorkerOrigin();

  if (workerOrigin && process.env.TOKEN) {
    await triggerWorkerManagedRebuilds(workerOrigin);
    return;
  }

  const hookUrls = parseHookUrls(process.env.REBUILD_SITES);

  if (hookUrls.length > 0) {
    console.log(
      "[cf:deploy] Falling back to local REBUILD_SITES because the deployed Worker cannot be called."
    );
    await triggerRebuildHooks(hookUrls);
    return;
  }

  if (!process.env.TOKEN) {
    console.log(
      "[cf:deploy] No local TOKEN available, skipping Worker-managed downstream rebuild trigger."
    );
    return;
  }

  console.log(
    "[cf:deploy] No public Worker route found in wrangler.jsonc, skipping downstream rebuild trigger."
  );
}

async function triggerWorkerManagedRebuilds(workerOrigin) {
  const url = new URL(REBUILD_TRIGGER_PATH, workerOrigin);

  console.log(
    `[cf:deploy] Asking the deployed Worker to trigger downstream rebuilds via ${url.href}.`
  );

  const response = await fetch(url, {
    headers: {
      TOKEN: process.env.TOKEN,
    },
    method: "POST",
  });
  const payload = await readJsonIfPossible(response);

  if (!response.ok) {
    const details =
      payload && typeof payload === "object"
        ? JSON.stringify(payload)
        : response.statusText;

    throw new Error(
      `[cf:deploy] Worker-managed rebuild trigger failed: HTTP ${response.status} ${details}`.trim()
    );
  }

  if (payload?.skipped) {
    console.log(
      "[cf:deploy] The deployed Worker has no REBUILD_SITES configured, skipping downstream rebuilds."
    );
    return;
  }

  console.log(
    `[cf:deploy] The deployed Worker triggered ${payload?.triggered ?? 0} downstream rebuild${payload?.triggered === 1 ? "" : "s"}.`
  );

  if (Array.isArray(payload?.buildIds) && payload.buildIds.length > 0) {
    console.log(
      `[cf:deploy] Accepted downstream builds: ${payload.buildIds.join(", ")}`
    );
  }
}

async function postDeployHook(url) {
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

async function readJsonIfPossible(response) {
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

function parseHookUrls(value) {
  if (typeof value !== "string") {
    return [];
  }

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}

function getWranglerCommand() {
  return process.platform === "win32" ? "wrangler.cmd" : "wrangler";
}

function getWorkerOrigin() {
  try {
    const config = JSON.parse(readFileSync(WRANGLER_CONFIG_URL, "utf8"));
    const routes = Array.isArray(config.routes) ? config.routes : [];

    for (const route of routes) {
      const pattern =
        typeof route === "string" ? route : typeof route?.pattern === "string" ? route.pattern : null;
      const hostname = parseRouteHostname(pattern);

      if (hostname) {
        return `https://${hostname}`;
      }
    }
  } catch (error) {
    console.warn(
      `[cf:deploy] Failed to read wrangler.jsonc for the public Worker route: ${formatError(error)}`
    );
  }

  return null;
}

function parseRouteHostname(pattern) {
  if (typeof pattern !== "string") {
    return null;
  }

  const hostname = pattern.trim().split("/")[0];

  if (!hostname || hostname.includes("*")) {
    return null;
  }

  return hostname;
}

function loadOptionalEnvFiles(paths) {
  if (typeof process.loadEnvFile !== "function") {
    return;
  }

  for (const path of paths) {
    if (!fileExists(path)) {
      continue;
    }

    process.loadEnvFile(path);
  }
}

function fileExists(path) {
  try {
    accessSync(path, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function isEntrypoint() {
  const entrypoint = process.argv[1];

  if (!entrypoint) {
    return false;
  }

  return import.meta.url === pathToFileURL(entrypoint).href;
}
