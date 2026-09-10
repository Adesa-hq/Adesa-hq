import sharp from "sharp";

const source = "public/Legacy in Motion-Recovered.png";
const outputs = [
  { width: 960, suffix: "960" },
  { width: 1600, suffix: "1600" },
];

const trimmed = await sharp(source)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 12 })
  .png()
  .toBuffer();

for (const output of outputs) {
  const pipeline = sharp(trimmed).resize({
    width: output.width,
    withoutEnlargement: true,
  });

  await pipeline
    .clone()
    .webp({ quality: 84, effort: 6 })
    .toFile(`public/legacy-in-motion-hero-${output.suffix}.webp`);

  await pipeline
    .clone()
    .avif({ quality: 64, effort: 7 })
    .toFile(`public/legacy-in-motion-hero-${output.suffix}.avif`);
}

const metadata = await sharp(trimmed).metadata();
console.log(`Trimmed hero artwork: ${metadata.width}x${metadata.height}`);

for (const size of [192, 512]) {
  await sharp("public/Adesa HQ new look secondary.png")
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`public/icons/adesa-${size}.png`);
}

await sharp("public/Adesa HQ brochure 1.png")
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile("public/adesa-brochure-showcase.webp");

await sharp("public/Legacy in Motion.png")
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile("public/legacy-in-motion-story.webp");
