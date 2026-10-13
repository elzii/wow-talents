#!/usr/bin/env bun
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

// Helper to run command and log
function run(cmd: string) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

// Read and bump package.json
const pkgPath = "package.json";
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const currentVersion = pkg.version || "1.0.0";
const parts = currentVersion.split(".").map(Number);
parts[2] = (parts[2] || 0) + 1; // Bump patch version
const nextVersion = parts.join(".");

console.log(`Bumping version: ${currentVersion} -> ${nextVersion}`);

// Update package.json
pkg.version = nextVersion;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

// Update electrobun.config.ts
const electroConfigPath = "electrobun.config.ts";
if (readFileSync(electroConfigPath, "utf8")) {
  let configContent = readFileSync(electroConfigPath, "utf8");
  configContent = configContent.replace(
    /version:\s*"[^"]+"/,
    `version: "${nextVersion}"`
  );
  writeFileSync(electroConfigPath, configContent);
  console.log(`Updated electrobun.config.ts version to ${nextVersion}`);
}

const tag = `v${nextVersion}`;

// Git commit and tag
run(`git add package.json electrobun.config.ts`);
run(`git commit -m "chore(release): bump version to ${nextVersion}"`);
run(`git tag ${tag}`);
run(`git push origin main`);
run(`git push origin ${tag}`);

console.log(`\nSuccessfully released and pushed tag ${tag}!`);
console.log(`GitHub Actions will build and deploy release ${tag} for OTA updates.`);
