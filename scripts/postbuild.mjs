/**
 * Postbuild static-HTML pipeline.
 *
 * After `vite build` writes dist/index.html and the JS/CSS bundle, this
 * script reads dist/index.html as a template, substitutes per-route
 * <title> / <meta name="description"> / <link rel="canonical"> / OG /
 * Twitter tags, and writes a real HTML file at dist/<route>/index.html
 * for every entry in src/routes-meta.js.
 *
 * Why: the SPA already updates document.title at runtime via PageShell,
 * but social previews (Slack, X, Facebook, LinkedIn) and most non-Google
 * crawlers don't execute JS. They need the right tags in the static HTML.
 *
 * Netlify serves dist/<route>/index.html for /<route> by default (pretty
 * URLs), and the SPA catch-all rewrite is non-forced, so filesystem
 * matching wins for any pre-rendered route. No netlify.toml changes
 * required.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, PRERENDER_PATHS } from "../src/routes-meta.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

/* HTML escape for attribute values: & " */
const escAttr = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");

/* HTML escape for text content: & < > */
const escText = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * Run a regex replace and warn loudly if the regex didn't match. A silent
 * miss here would mean the page ships with the wrong meta — better to
 * fail the build and force a fix.
 */
function replaceOrThrow(html, regex, replacement, label) {
  if (!regex.test(html)) {
    throw new Error(`postbuild: could not find ${label} in dist/index.html — has the template changed?`);
  }
  return html.replace(regex, replacement);
}

function rewriteHead(template, meta) {
  let html = template;
  html = replaceOrThrow(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escText(meta.title)}</title>`,
    "<title>"
  );
  html = replaceOrThrow(
    html,
    /(<meta name="description" content=")[^"]*(")/,
    `$1${escAttr(meta.description)}$2`,
    'meta description'
  );
  html = replaceOrThrow(
    html,
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${escAttr(meta.canonical)}$2`,
    "canonical link"
  );
  html = replaceOrThrow(
    html,
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${escAttr(meta.title)}$2`,
    "og:title"
  );
  html = replaceOrThrow(
    html,
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${escAttr(meta.description)}$2`,
    "og:description"
  );
  html = replaceOrThrow(
    html,
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${escAttr(meta.canonical)}$2`,
    "og:url"
  );
  html = replaceOrThrow(
    html,
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${escAttr(meta.title)}$2`,
    "twitter:title"
  );
  html = replaceOrThrow(
    html,
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${escAttr(meta.description)}$2`,
    "twitter:description"
  );
  return html;
}

async function main() {
  const templatePath = join(distDir, "index.html");
  const template = await readFile(templatePath, "utf8");

  // Re-write the homepage from ROUTES["/"] too. Keeps a single source of
  // truth even though the values are likely identical to what Vite already
  // emitted.
  const homeMeta = ROUTES["/"];
  if (homeMeta) {
    const homeHtml = rewriteHead(template, homeMeta);
    await writeFile(templatePath, homeHtml, "utf8");
  }

  // Generate dist/<route>/index.html for every other route.
  let count = 0;
  for (const path of PRERENDER_PATHS) {
    const meta = ROUTES[path];
    if (!meta) continue;
    const html = rewriteHead(template, meta);
    const segments = path.replace(/^\//, "").split("/");
    const outDir = join(distDir, ...segments);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    count++;
  }

  console.log(`✓ postbuild: pre-rendered ${count} routes (+ homepage) into dist/`);
}

main().catch((err) => {
  console.error("postbuild failed:", err);
  process.exit(1);
});
