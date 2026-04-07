import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { createBrotliCompress, createGzip } from "node:zlib";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const rootDir = resolve(process.cwd(), "out");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const compressibleExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".svg",
  ".txt",
  ".xml",
]);

function getFilePath(urlPath) {
  const normalizedPath = decodeURIComponent(urlPath.split("?")[0] || "/");
  const candidates = normalizedPath === "/"
    ? [join(rootDir, "index.html")]
    : [
        join(rootDir, normalizedPath),
        join(rootDir, normalizedPath, "index.html"),
        join(rootDir, `${normalizedPath}.html`),
      ];

  return candidates.find((candidate) => {
    if (!candidate.startsWith(rootDir)) {
      return false;
    }

    return existsSync(candidate) && statSync(candidate).isFile();
  });
}

function getCacheControl(filePath) {
  if (filePath.includes(`${resolve(rootDir, "_next", "static")}`)) {
    return "public, max-age=31536000, immutable";
  }

  if (/\.(?:webp|png|jpg|jpeg|svg|ico|woff2)$/i.test(filePath)) {
    return "public, max-age=31536000, immutable";
  }

  if (/\.(?:css|js)$/i.test(filePath)) {
    return "public, max-age=31536000, immutable";
  }

  return "public, max-age=0, must-revalidate";
}

const server = createServer((req, res) => {
  const filePath = getFilePath(req.url || "/");

  if (!filePath) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not found");
    return;
  }

  const extension = extname(filePath).toLowerCase();
  const acceptEncoding = req.headers["accept-encoding"] ?? "";
  const shouldCompress = compressibleExtensions.has(extension);

  res.statusCode = 200;
  res.setHeader("Cache-Control", getCacheControl(filePath));
  res.setHeader("Vary", "Accept-Encoding");
  res.setHeader(
    "Content-Type",
    mimeTypes[extension] || "application/octet-stream",
  );

  const stream = createReadStream(filePath);

  if (shouldCompress && /\bbr\b/.test(acceptEncoding)) {
    res.setHeader("Content-Encoding", "br");
    stream.pipe(createBrotliCompress()).pipe(res);
    return;
  }

  if (shouldCompress && /\bgzip\b/.test(acceptEncoding)) {
    res.setHeader("Content-Encoding", "gzip");
    stream.pipe(createGzip()).pipe(res);
    return;
  }

  stream.pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`Static preview running at http://localhost:${PORT}`);
});
