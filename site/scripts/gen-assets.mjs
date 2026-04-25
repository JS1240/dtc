// Generate PNG raster assets from the SVG sources in scripts/sources/.
// Run once after editing sources, then commit the generated PNGs.
//
// Usage: npm run gen:assets

import { readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const SOURCES = resolve(here, 'sources');
const OUT = resolve(here, '..', 'public');

const TARGETS = [
  { src: 'icon-source.svg', out: 'icon-192.png', size: [192, 192] },
  { src: 'icon-source.svg', out: 'icon-512.png', size: [512, 512] },
  { src: 'icon-source.svg', out: 'apple-touch-icon.png', size: [180, 180] },
  { src: 'og-source.svg', out: 'og-image.png', size: [1200, 630] },
];

await mkdir(OUT, { recursive: true });

for (const t of TARGETS) {
  const svg = readFileSync(resolve(SOURCES, t.src));
  const buf = await sharp(svg)
    .resize(t.size[0], t.size[1], { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(resolve(OUT, t.out), buf);
  console.log(`generated ${t.out} (${t.size[0]}x${t.size[1]})`);
}

console.log('done');
