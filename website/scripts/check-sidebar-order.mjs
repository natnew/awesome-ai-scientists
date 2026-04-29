#!/usr/bin/env node
/**
 * Sidebar consistency guard.
 *
 * Asserts that the explicit order in `website/sidebars.ts` matches the
 * `sidebar_position` front-matter on every doc under `website/docs/`.
 *
 * No external dependencies — uses regex parsing of both files. Exits 1 on
 * drift, 0 on consistency. Wire into CI alongside the link-check job.
 */
import {readFileSync, readdirSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const websiteDir = resolve(here, '..');
const sidebarsPath = resolve(websiteDir, 'sidebars.ts');
const docsDir = resolve(websiteDir, 'docs');

// Parse sidebars.ts: extract single-quoted ids from the docsSidebar array.
const sidebarsSrc = readFileSync(sidebarsPath, 'utf8');
const arrayMatch = sidebarsSrc.match(/docsSidebar:\s*\[([\s\S]*?)\]/);
if (!arrayMatch) {
  console.error('FAIL: could not locate docsSidebar array in sidebars.ts');
  process.exit(1);
}
const sidebarIds = [...arrayMatch[1].matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]);

if (sidebarIds.length === 0) {
  console.error('FAIL: docsSidebar array parsed empty');
  process.exit(1);
}

// Parse front-matter sidebar_position from each docs/*.md file.
const docFiles = readdirSync(docsDir)
  .filter((name) => name.endsWith('.md'))
  .sort();

const docPositions = new Map(); // id -> position
const idsWithoutPosition = [];

for (const name of docFiles) {
  const id = name.replace(/\.md$/, '');
  const src = readFileSync(resolve(docsDir, name), 'utf8');
  const fmMatch = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    idsWithoutPosition.push(id);
    continue;
  }
  const posMatch = fmMatch[1].match(/^sidebar_position:\s*(\d+)\s*$/m);
  if (!posMatch) {
    idsWithoutPosition.push(id);
    continue;
  }
  docPositions.set(id, Number(posMatch[1]));
}

// Build expected order from front-matter (sorted ascending by position).
const docOrder = [...docPositions.entries()]
  .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
  .map(([id]) => id);

let failed = false;

// 1. Every sidebar id must exist as a doc.
for (const id of sidebarIds) {
  if (!docPositions.has(id) && !idsWithoutPosition.includes(id)) {
    console.error(`FAIL: sidebars.ts references "${id}" but no website/docs/${id}.md found`);
    failed = true;
  }
}

// 2. Every doc with a position must appear in sidebars.ts.
for (const id of docPositions.keys()) {
  if (!sidebarIds.includes(id)) {
    console.error(`FAIL: website/docs/${id}.md sets sidebar_position but is missing from sidebars.ts`);
    failed = true;
  }
}

// 3. Order must match.
const sharedSidebar = sidebarIds.filter((id) => docPositions.has(id));
const sharedDocs = docOrder.filter((id) => sidebarIds.includes(id));
if (sharedSidebar.join(',') !== sharedDocs.join(',')) {
  console.error('FAIL: order drift between sidebars.ts and front-matter sidebar_position');
  console.error(`  sidebars.ts:  ${sharedSidebar.join(' -> ')}`);
  console.error(`  front-matter: ${sharedDocs.join(' -> ')}`);
  failed = true;
}

// 4. Warn (non-fatal) about docs missing front-matter position.
if (idsWithoutPosition.length > 0) {
  console.warn(`WARN: docs without sidebar_position front-matter: ${idsWithoutPosition.join(', ')}`);
}

if (failed) {
  process.exit(1);
}

console.log(`OK: sidebar order matches front-matter (${sharedSidebar.length} docs).`);
