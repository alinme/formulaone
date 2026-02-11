/**
 * Copy public and .next/static into standalone output so static files are served.
 * Run from apps/nextjs: node scripts/copy-standalone-assets.cjs
 */
const fs = require("fs");
const path = require("path");

const appDir = path.resolve(__dirname, "..");
const standaloneDir = path.join(appDir, ".next", "standalone", "apps", "nextjs");

const dirs = [
  { src: path.join(appDir, "public"), dest: path.join(standaloneDir, "public") },
  { src: path.join(appDir, ".next", "static"), dest: path.join(standaloneDir, ".next", "static") },
];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("copy-standalone-assets: skip (missing)", src);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const srcPath = path.join(src, name);
    const destPath = path.join(dest, name);
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const { src, dest } of dirs) {
  if (fs.existsSync(src)) {
    console.log("Copying", path.relative(appDir, src), "->", path.relative(appDir, dest));
    copyRecursive(src, dest);
  }
}
console.log("Standalone assets copied.");
