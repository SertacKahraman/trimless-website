import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();

const imageJobs = [
  {
    src: "public/homojen-isik-dagilimi-trimless-led.webp",
    widths: [768],
    quality: 72,
  },
  {
    src: "public/siva-alti-trimless-led-mimari-cozum.webp",
    widths: [768],
    quality: 72,
  },
  {
    src: "public/trimless-led-profil-urun-gorseli.webp",
    widths: [480, 640, 960],
    quality: 74,
  },
];

for (const job of imageJobs) {
  const sourcePath = path.join(projectRoot, job.src);
  const extension = path.extname(sourcePath);
  const basePath = sourcePath.slice(0, -extension.length);
  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read dimensions for ${job.src}`);
  }

  for (const width of job.widths) {
    const outputPath = `${basePath}-${width}w${extension}`;

    await sharp(sourcePath)
      .resize({
        width,
        withoutEnlargement: true,
      })
      .webp({
        quality: job.quality,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
  }
}
