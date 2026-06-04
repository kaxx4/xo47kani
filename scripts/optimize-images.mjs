/* Optimize the photographic assets in public/images for web delivery.
 * Resizes to a sane max long-edge and re-encodes JPEG with mozjpeg.
 * These are white-background packshots shown with mix-blend-mode: multiply,
 * so quality is kept high enough to avoid edge artefacts in the blend.
 *
 * Usage: node scripts/optimize-images.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MAX_EDGE = 1800; // px — covers near-retina for the largest display (full-bleed feature)
const QUALITY = 80;

const files = readdirSync(DIR).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;

for (const f of files) {
  const path = join(DIR, f);
  const input = readFileSync(path);
  const out = await sharp(input)
    .rotate() // honour EXIF orientation before stripping metadata
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();
  const final = out.length < input.length ? out : input;
  if (out.length < input.length) writeFileSync(path, out);
  before += input.length;
  after += final.length;
  const mb = (n) => (n / 1048576).toFixed(2);
  console.log(`${f.padEnd(16)} ${mb(input.length)}MB -> ${mb(final.length)}MB`);
}

const mb = (n) => (n / 1048576).toFixed(1);
console.log(`\nTOTAL ${mb(before)}MB -> ${mb(after)}MB (${files.length} files)`);
