import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outDir = resolve(process.cwd(), "out");
const indexPath = join(outDir, "index.html");
const nextBackupPath = join(outDir, "index.next.html");
const staticSnapshotPath = join(outDir, "index.static.html");
const inlineCssMaxBytes = 65536;

function inlineSmallStylesheets(html) {
  return html.replace(
    /<link rel="stylesheet" href="([^"]+\.css)" data-precedence="next"\/>/g,
    (fullMatch, href) => {
      const stylesheetPath = join(outDir, href.replace(/^\//, ""));

      if (!existsSync(stylesheetPath)) {
        return fullMatch;
      }

      const css = readFileSync(stylesheetPath, "utf8").replace(
        /url\((["']?)\.\.\/media\//g,
        "url($1/_next/static/media/",
      );

      if (Buffer.byteLength(css) > inlineCssMaxBytes) {
        return fullMatch;
      }

      return `<style data-precedence="next" data-href="${href}">${css.replace(
        /<\/style/gi,
        "<\\/style",
      )}</style>`;
    },
  );
}

function stripNextRuntime(html) {
  let result = html;

  result = result.replace(
    /<link rel="preload" as="script"[^>]*href="\/_next\/static\/[^"]+"[^>]*>/g,
    "",
  );
  result = result.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/g,
    (fullMatch, attrs, content) => {
      const srcMatch = attrs.match(/\bsrc="([^"]+)"/);

      if (srcMatch?.[1]?.startsWith("/_next/static/")) {
        return "";
      }

      if (content.includes("self.__next_f")) {
        return "";
      }

      return fullMatch;
    },
  );
  result = result.replace(
    /<meta name="next-size-adjust" content=""\/>/g,
    "",
  );
  result = result.replace(/<div hidden=""><!--\$--><!--\/\$--><\/div>/g, "");
  result = inlineSmallStylesheets(result);

  const noscriptStyle =
    '<noscript><style>[data-reveal]{opacity:1!important;transform:none!important}</style></noscript>';
  const runtimeScript = '<script src="/landing-runtime.js" defer></script>';

  result = result.replace("</head>", `${noscriptStyle}</head>`);
  result = result.replace("</body>", `${runtimeScript}</body>`);

  return "<!-- static-landing-mode:static -->" + result;
}

try {
  const originalHtml = readFileSync(indexPath, "utf8");
  const staticHtml = stripNextRuntime(originalHtml);

  for (const staleFile of [nextBackupPath, staticSnapshotPath]) {
    if (existsSync(staleFile)) {
      rmSync(staleFile, { force: true });
    }
  }

  writeFileSync(indexPath, staticHtml);
  console.log("Landing page mode: static");
  console.log("Replaced out/index.html with static landing output.");
} catch (error) {
  console.error("Failed to prepare landing page output.", error);
  process.exit(1);
}
