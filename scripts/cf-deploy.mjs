import { spawnSync } from "node:child_process";
import { constants as fsConstants } from "node:fs";
import { accessSync } from "node:fs";
import { pathToFileURL } from "node:url";

loadOptionalEnvFiles([".env", ".dev.vars"]);

if (isEntrypoint()) {
  await main();
}

export async function main() {
  const hookUrls = parseHookUrls(process.env.REBUILD_SITES);

  runWranglerDeploy();
  await triggerRebuildHooks(hookUrls);
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
