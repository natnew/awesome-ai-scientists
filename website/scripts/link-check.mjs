#!/usr/bin/env node
/**
 * Repo-wide markdown-link-check runner.
 *
 * Targets the curated file list locked in specs/2026-04-29-search-link-health/plan.md:
 *   - README.md
 *   - CONTRIBUTING.md
 *   - website/docs/*.md
 *
 * Exits non-zero if any file reports dead links. Designed so Phase 7 (CI) can
 * call `npm run link-check` from `website/` unchanged.
 */
import {readFileSync, existsSync} from 'node:fs';
import {dirname, resolve, relative} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const markdownLinkCheck = require('markdown-link-check');

const here = dirname(fileURLToPath(import.meta.url));
const websiteDir = resolve(here, '..');
const repoRoot = resolve(websiteDir, '..');
const configPath = resolve(repoRoot, '.markdown-link-check.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

const targets = [
  'README.md',
  'CONTRIBUTING.md',
  'website/docs/start-here.md',
  'website/docs/workflows.md',
  'website/docs/domains.md',
  'website/docs/resource-types.md',
  'website/docs/explore.md',
  'website/docs/highlights.md',
  'website/docs/site-development.md',
];

function checkOne(absPath) {
  const fileDir = dirname(absPath);
  return new Promise((resolvePromise, rejectPromise) => {
    const markdown = readFileSync(absPath, 'utf8');
    const perFileConfig = {
      ...config,
      baseUrl: pathToFileURL(absPath).toString(),
    };
    markdownLinkCheck(markdown, perFileConfig, (err, results) => {
      if (err) {
        rejectPromise(err);
        return;
      }
      // Re-classify relative / file:// links by checking disk existence.
      // markdown-link-check returns status 400 for file:// because Node's fetch
      // can't speak file://. We resolve the link against the source file's
      // directory and treat it as alive when the target exists on disk.
      for (const r of results) {
        if (r.status !== 'alive' && r.link && !/^[a-z][a-z0-9+.-]*:/i.test(r.link)) {
          // Strip query/fragment.
          const cleaned = r.link.split('#')[0].split('?')[0];
          if (cleaned === '') {
            r.status = 'alive';
            r.statusCode = 200;
            continue;
          }
          const target = resolve(fileDir, cleaned);
          if (existsSync(target)) {
            r.status = 'alive';
            r.statusCode = 200;
          }
        }
      }
      resolvePromise(results);
    });
  });
}

function statusGlyph(status) {
  if (status === 'alive') return '✓';
  if (status === 'ignored') return '-';
  return '✗';
}

let totalDead = 0;
const summary = [];

for (const rel of targets) {
  const abs = resolve(repoRoot, rel);
  const display = relative(repoRoot, abs).replaceAll('\\', '/');
  if (!existsSync(abs)) {
    console.log(`SKIP ${display} (not found)`);
    summary.push({file: display, alive: 0, dead: 0, ignored: 0, missing: true});
    continue;
  }

  process.stdout.write(`\nFILE ${display}\n`);
  // eslint-disable-next-line no-await-in-loop
  const results = await checkOne(abs);
  let alive = 0;
  let dead = 0;
  let ignored = 0;
  for (const r of results) {
    if (r.status === 'alive') alive += 1;
    else if (r.status === 'ignored') ignored += 1;
    else dead += 1;
    const code = r.statusCode != null ? ` [${r.statusCode}]` : '';
    console.log(`  ${statusGlyph(r.status)} ${r.status}${code} ${r.link}`);
  }
  totalDead += dead;
  summary.push({file: display, alive, dead, ignored});
}

console.log('\n--- summary ---');
for (const row of summary) {
  if (row.missing) {
    console.log(`${row.file.padEnd(40)} : missing`);
    continue;
  }
  console.log(
    `${row.file.padEnd(40)} : ${String(row.alive).padStart(3)} alive, ${String(row.dead).padStart(2)} dead, ${String(row.ignored).padStart(2)} ignored`,
  );
}

if (totalDead > 0) {
  console.error(`\nFAIL: ${totalDead} dead link(s).`);
  process.exit(1);
}
console.log('\nOK: all links alive.');
