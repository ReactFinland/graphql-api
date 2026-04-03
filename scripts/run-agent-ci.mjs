import { execFileSync, spawnSync } from "node:child_process";
import path from "node:path";
import { createRequire } from "node:module";

const args = process.argv.slice(2);
const dockerHost = process.env.DOCKER_HOST || resolveDockerHost();
const require = createRequire(import.meta.url);
const agentCiPackagePath = require.resolve("@redwoodjs/agent-ci/package.json");
const { bin } = require(agentCiPackagePath);
const agentCiEntrypoint = path.join(
  path.dirname(agentCiPackagePath),
  bin["agent-ci"]
);
const result = spawnSync(process.execPath, [agentCiEntrypoint, ...args], {
  env: {
    ...process.env,
    DOCKER_HOST: dockerHost,
  },
  stdio: ["ignore", "inherit", "inherit"],
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

function resolveDockerHost() {
  try {
    const context = execFileSync("docker", ["context", "show"], {
      encoding: "utf8",
    }).trim();
    const inspected = execFileSync("docker", ["context", "inspect", context], {
      encoding: "utf8",
    });
    const [definition] = JSON.parse(inspected);
    const host = definition?.Endpoints?.docker?.Host;

    if (typeof host === "string" && host.length > 0) {
      return host;
    }
  } catch {
    // Fall back to the default Docker socket below.
  }

  return "unix:///var/run/docker.sock";
}
