/**
 * strip-premium.js
 *
 * Strips all fs_premium_only blocks and removes __premium_only files
 * from source directories, writing the result to dist-free/.
 *
 * This is what gets pushed to the public GitHub repo.
 *
 * Usage:
 *   node scripts/strip-premium.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { globSync } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.resolve(rootDir, "dist-free");

// Directories and files to copy into the free developer source distribution.
// Only paths that actually exist in the repo are processed; missing ones are warned.
const INCLUDE_PATHS = [
    // Source code (JS/TS/SCSS) — the whole point of a dev zip
    "source",
    "scripts",
    "tokens",
    // PHP plugin files
    "includes",
    "core",
    "models",
    "languages",
    // Built assets (so the zip works without npm install)
    "assets",
    // Root files
    "uninstall.php",
    "pninja-media-gallery.php",   // ← correct plugin filename
    "index.php",
    "readme.txt",
    "package.json",
    "tsconfig.json",
    "webpack.prod.config.js",
    "webpack.dev.config.js",
];

// Text file extensions to process for premium block stripping
const TEXT_EXTENSIONS = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".php",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".htm",
    ".json",
    ".txt",
    ".md",
]);

// Matches: {/* <fs_premium_only> */} or /* <fs_premium_only> */ ... closing tag
// Includes surrounding blank lines to avoid whitespace gaps after removal
const JS_PREMIUM_BLOCK =
    /[ \t]*\{?\/\* <fs_premium_only> \*\/\}?[\s\S]*?\{?\/\* <\/fs_premium_only> \*\/\}?[ \t]*\r?\n?/g;

// Matches: // @fs_premium_only ... // @end_fs_premium_only (PHP single-line style)
const PHP_PREMIUM_LINE_BLOCK =
    /[ \t]*\/\/ @fs_premium_only[\s\S]*?\/\/ @end_fs_premium_only[ \t]*\r?\n?/g;

//

function findClosingParen(content, openPos) {
    let depth = 1;
    let i = openPos + 1;
    while (i < content.length && depth > 0) {
        const ch = content[i];
        if (ch === "(") depth++;
        else if (ch === ")") depth--;
        i++;
    }
    return depth === 0 ? i - 1 : -1;
}

function findClosingBrace(content, openPos) {
    let depth = 1;
    let i = openPos + 1;
    while (i < content.length && depth > 0) {
        const ch = content[i];
        if (ch === "{") depth++;
        else if (ch === "}") depth--;
        i++;
    }
    return depth === 0 ? i - 1 : -1;
}

function getLineStart(content, pos) {
    const lineStart = content.lastIndexOf("\n", pos - 1) + 1;
    return content.slice(lineStart, pos).trim() === "" ? lineStart : pos;
}

function stripPhpPremiumBlocks(content) {
    let result = content;
    let changed = true;

    while (changed) {
        changed = false;

        // Remove functions with __premium_only suffix
        const funcRe =
            /(?:(?:public|protected|private|static|abstract|final)\s+)*function\s+\w+__premium_only\s*\(/g;
        const funcMatch = funcRe.exec(result);
        if (funcMatch) {
            const openParenPos = funcMatch.index + funcMatch[0].length - 1;
            const closeParenPos = findClosingParen(result, openParenPos);
            if (closeParenPos !== -1) {
                const openBracePos = result.indexOf("{", closeParenPos);
                if (openBracePos !== -1) {
                    const closeBracePos = findClosingBrace(
                        result,
                        openBracePos,
                    );
                    if (closeBracePos !== -1) {
                        const removeStart = getLineStart(
                            result,
                            funcMatch.index,
                        );
                        const after = result.slice(closeBracePos + 1);
                        const trailingNl = after.match(/^\r?\n/);
                        result =
                            result.slice(0, removeStart) +
                            (trailingNl
                                ? after.slice(trailingNl[0].length)
                                : after);
                        changed = true;
                    }
                }
            }
        }
        if (changed) continue;

        // Remove if blocks whose condition contains __premium_only
        // If an else block follows, unwrap its contents in place.
        const ifRe = /\bif\s*\(/g;
        let ifMatch;
        while ((ifMatch = ifRe.exec(result)) !== null) {
            const openParenPos = ifMatch.index + ifMatch[0].length - 1;
            const closeParenPos = findClosingParen(result, openParenPos);
            if (closeParenPos === -1) continue;

            const condition = result.slice(openParenPos, closeParenPos + 1);
            if (!condition.includes("__premium_only")) continue;

            const openBracePos = result.indexOf("{", closeParenPos);
            if (openBracePos === -1) continue;

            const closeBracePos = findClosingBrace(result, openBracePos);
            if (closeBracePos === -1) continue;

            const removeStart = getLineStart(result, ifMatch.index);
            const afterIf = result.slice(closeBracePos + 1);

            // Check for a following else block
            const elseMatch = afterIf.match(/^(\s*else\s*\{)/);
            if (elseMatch) {
                // Find the else's opening brace position in the full string
                const elseOpenBraceOffset = afterIf.indexOf("{", elseMatch[0].indexOf("else"));
                const elseOpenBracePos = closeBracePos + 1 + elseOpenBraceOffset;
                const elseCloseBracePos = findClosingBrace(result, elseOpenBracePos);
                if (elseCloseBracePos !== -1) {
                    // Extract inner content of else block (between the braces)
                    let elseInner = result.slice(elseOpenBracePos + 1, elseCloseBracePos);
                    // Remove one level of leading indentation per line
                    elseInner = elseInner.replace(/^(\t| {4})/gm, "");
                    // Strip leading/trailing blank lines from inner content
                    elseInner = elseInner.replace(/^\r?\n/, "").replace(/\r?\n\s*$/, "");
                    const afterElse = result.slice(elseCloseBracePos + 1);
                    const trailingNl = afterElse.match(/^\r?\n/);
                    result =
                        result.slice(0, removeStart) +
                        elseInner +
                        "\n" +
                        (trailingNl ? afterElse.slice(trailingNl[0].length) : afterElse);
                    changed = true;
                    break;
                }
            }

            // No else — remove the entire if block
            const trailingNl = afterIf.match(/^\r?\n/);
            result =
                result.slice(0, removeStart) +
                (trailingNl ? afterIf.slice(trailingNl[0].length) : afterIf);
            changed = true;
            break;
        }
    }

    return result;
}

function stripContent(content, ext = "") {
    let result = content
        .replace(JS_PREMIUM_BLOCK, "")
        .replace(PHP_PREMIUM_LINE_BLOCK, "");

    if (ext === ".php") {
        result = stripPhpPremiumBlocks(result);
    }

    // Collapse 3+ consecutive blank lines down to one
    result = result.replace(/(\r?\n){3,}/g, "\n\n");

    return result;
}

function processFile(sourcePath, destPath) {
    const ext = path.extname(sourcePath).toLowerCase();

    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    if (TEXT_EXTENSIONS.has(ext)) {
        const content = fs.readFileSync(sourcePath, "utf8");
        const stripped = stripContent(content, ext);
        fs.writeFileSync(destPath, stripped, "utf8");
    } else {
        fs.copyFileSync(sourcePath, destPath);
    }
}

function processDirectory(sourceDirAbs, relBase) {
    const files = globSync("**/*", {
        cwd: sourceDirAbs,
        nodir: true,
        dot: true,
    });

    let copied = 0;
    let skipped = 0;

    for (const file of files) {
        // Skip __premium_only files entirely
        if (file.includes("__premium_only")) {
            console.log(`  [skip]  ${relBase}/${file}`);
            skipped++;
            continue;
        }

        const sourcePath = path.join(sourceDirAbs, file);
        const destPath = path.join(outputDir, relBase, file);
        processFile(sourcePath, destPath);
        copied++;
    }

    return { copied, skipped };
}

// ── Main ─────────────────────────────────────────────────────────────────────

// Clean previous output
if (fs.existsSync(outputDir)) {
    try {
        fs.rmSync(outputDir, { recursive: true, force: true });
    } catch {
        // Fallback for mounted volumes (e.g. macOS/Windows mount restrictions)
        try {
            const cmd =
                process.platform === "win32"
                    ? `rmdir /s /q "${outputDir}"`
                    : `rm -rf "${outputDir}"`;
            execSync(cmd, { stdio: "pipe" });
        } catch {
            // If deletion fails entirely, files will be overwritten in place
        }
    }
}
fs.mkdirSync(outputDir, { recursive: true });

let totalCopied = 0;
let totalSkipped = 0;

for (const entry of INCLUDE_PATHS) {
    const sourceAbs = path.resolve(rootDir, entry);

    if (!fs.existsSync(sourceAbs)) {
        console.warn(`[warn] Not found, skipping: ${entry}`);
        continue;
    }

    const stat = fs.statSync(sourceAbs);

    if (stat.isDirectory()) {
        console.log(`\nProcessing ${entry}/`);
        const { copied, skipped } = processDirectory(sourceAbs, entry);
        totalCopied += copied;
        totalSkipped += skipped;
    } else {
        // Single file (e.g. ninja-drive.php, readme.txt)
        const destPath = path.join(outputDir, entry);
        processFile(sourceAbs, destPath);
        console.log(`Copied     ${entry}`);
        totalCopied++;
    }
}
// ── Patch webpack.dev.config.js: redirect JS/font/icon/image output to root assets/ ──
// When running `npm run start` from dist-free/, __dirname = dist-free/.
// We redirect all output paths one level up (../assets/) so WordPress
// loads freshly built files from the actual plugin root.
const devConfigDest = path.resolve(outputDir, "webpack.dev.config.js");
if (fs.existsSync(devConfigDest)) {
    let devConfig = fs.readFileSync(devConfigDest, "utf8");
    devConfig = devConfig.replace(
        /path\.resolve\(__dirname,\s*["']assets\//g,
        'path.resolve(__dirname, "../assets/',
    );
    fs.writeFileSync(devConfigDest, devConfig, "utf8");
    console.log("Patched    webpack.dev.config.js  → output → ../assets/");
}

// ── Write scripts/watch-css.js: cross-platform CSS watcher → root assets/css/ ──
// Uses absolute paths resolved at runtime via __dirname.
// Works on Windows (.cmd binaries), Mac, and Linux.
const watchCssCode = `/**
 * watch-css.js  (auto-generated — do not edit)
 * Watches source/assets/sass → root plugin assets/css/
 * Runs postcss after each sass compile.
 */
import { spawn, execFileSync } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const distFreeDir = path.resolve(__dirname, "..");
const rootDir     = path.resolve(distFreeDir, "..");
const sassIn      = path.join(distFreeDir, "source", "assets", "sass");
const cssOut      = path.join(rootDir, "assets", "css");
const postcssCfg  = path.join(distFreeDir, "postcss.config-sass.js");
const nmBin       = path.join(distFreeDir, "node_modules", ".bin");
const isWin       = process.platform === "win32";
const sassBin     = path.join(nmBin, isWin ? "sass.cmd"    : "sass");
const postcssBin  = path.join(nmBin, isWin ? "postcss.cmd" : "postcss");

fs.mkdirSync(cssOut, { recursive: true });
console.log("\\n CSS Watcher — source/assets/sass → " + cssOut + "\\n");

function runPostcss() {
    try {
        const files = fs.readdirSync(cssOut)
            .filter(f => f.endsWith(".css") && !f.endsWith(".map"))
            .map(f => path.join(cssOut, f));
        if (!files.length) return;
        const cfgArgs = fs.existsSync(postcssCfg) ? ["--config", postcssCfg] : [];
        execFileSync(postcssBin, [...files, "--replace", "--no-map", ...cfgArgs], { stdio: "pipe" });
        console.log("[postcss] processed " + files.length + " file(s)");
    } catch (e) { console.error("[postcss]", e.message); }
}

const sass = spawn(sassBin, ["--watch", sassIn + ":" + cssOut, "--style=expanded"],
    { stdio: ["inherit", "pipe", "pipe"], shell: false });

sass.stdout.on("data", d => {
    const line = d.toString().trim();
    if (line) { process.stdout.write("[sass] " + line + "\\n"); }
    if (/compiled|written/i.test(line)) setTimeout(runPostcss, 300);
});
sass.stderr.on("data", d => process.stderr.write("[sass] " + d));
sass.on("error", e => console.error("[sass] failed:", e.message));
sass.on("close", code => { if (code) console.error("[sass] exit:", code); });
`;

const watchCssDest = path.resolve(outputDir, "scripts", "watch-css.js");
fs.mkdirSync(path.dirname(watchCssDest), { recursive: true });
fs.writeFileSync(watchCssDest, watchCssCode, "utf8");
console.log("Written    scripts/watch-css.js");

// ── Patch package.json: wire watch-sass → node scripts/watch-css.js ──────────
const pkgJsonDest = path.resolve(outputDir, "package.json");
if (fs.existsSync(pkgJsonDest)) {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonDest, "utf8"));
    pkg.scripts["watch-sass"] = "node scripts/watch-css.js";
    fs.writeFileSync(pkgJsonDest, JSON.stringify(pkg, null, 2), "utf8");
    console.log(
        "Patched    package.json           → watch-sass → node scripts/watch-css.js",
    );
}

// ── Symlink node_modules so dist-free can reuse root deps without npm install ─
const nmSource = path.resolve(rootDir, "node_modules");
const nmLink = path.resolve(outputDir, "node_modules");
if (fs.existsSync(nmSource)) {
    try {
        if (fs.existsSync(nmLink) || fs.lstatSync(nmLink).isSymbolicLink()) {
            fs.rmSync(nmLink, { recursive: true, force: true });
        }
    } catch {
        /* ignore */
    }
    try {
        fs.symlinkSync(nmSource, nmLink, "junction");
        console.log("Linked     node_modules           → ../node_modules");
    } catch (e) {
        console.warn(`[warn] Could not symlink node_modules: ${e.message}`);
    }
}

console.log(`
──────────────────────────────────────────
Free source ready in: dist-free/
  Copied:  ${totalCopied} files
  Skipped: ${totalSkipped} premium-only files

  Dev workflow:
    cd dist-free && npm run start
  Assets output → ../assets/ (plugin root)
──────────────────────────────────────────
`);
