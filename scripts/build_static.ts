import { existsSync, rmSync, mkdirSync, cpSync } from "fs";
import { join } from "path";

const projectRoot = process.cwd();
const outDir = join(projectRoot, "build", "static");

console.log("🔨 Building static webapp in:", outDir);

// 1. Clean output folder
if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}
mkdirSync(outDir, { recursive: true });

// 2. Compile CSS via Tailwind CLI
console.log("🎨 Compiling Tailwind CSS...");
const cssProc = Bun.spawnSync([
  "bunx",
  "@tailwindcss/cli",
  "-i",
  "src/mainview/styles.css",
  "-o",
  join(outDir, "index.css"),
  "--minify"
]);

if (!cssProc.success) {
  console.error("Failed to build CSS:", cssProc.stderr.toString());
  process.exit(1);
}

// 3. Bundle frontend JavaScript via Bun.build
console.log("📦 Bundling JavaScript...");
const jsBuild = await Bun.build({
  entrypoints: ["src/mainview/index.tsx"],
  outdir: outDir,
  naming: "index.[ext]",
  minify: true,
  target: "browser",
  sourcemap: "none"
});

if (!jsBuild.success) {
  console.error("Failed to build JS:", jsBuild.logs);
  process.exit(1);
}

// 4. Copy HTML
console.log("📄 Copying index.html...");
cpSync("src/mainview/index.html", join(outDir, "index.html"));

// 5. Copy static assets
console.log("🖼️ Copying assets...");
cpSync("src/mainview/assets", join(outDir, "assets"), { recursive: true });

console.log("✨ Static webapp build complete at:", outDir);
