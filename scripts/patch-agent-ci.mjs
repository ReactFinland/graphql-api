import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const packageJsonPath = path.join(repoRoot, "package.json");
const agentCiConfigPath = path.join(
  repoRoot,
  "node_modules",
  "@redwoodjs",
  "agent-ci",
  "dist",
  "docker",
  "container-config.js"
);

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const packageManager = String(packageJson.packageManager ?? "");

if (!packageManager.startsWith("npm@")) {
  process.exit(0);
}

if (!fs.existsSync(agentCiConfigPath)) {
  console.error(`[agent-ci patch] Missing ${agentCiConfigPath}`);
  process.exit(1);
}

const pnpmMountLine =
  "        `${h(pnpmStoreDir)}:/home/runner/_work/.pnpm-store`,\n";
const patchComment =
  "        // graphql-api patch: disable the pnpm store mount for npm-based local CI\n";

const source = fs.readFileSync(agentCiConfigPath, "utf8");

if (source.includes(patchComment)) {
  process.exit(0);
}

if (!source.includes(pnpmMountLine)) {
  console.error(
    "[agent-ci patch] Expected pnpm store mount line was not found."
  );
  process.exit(1);
}

fs.writeFileSync(
  agentCiConfigPath,
  source.replace(pnpmMountLine, patchComment)
);
