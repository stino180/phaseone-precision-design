#!/usr/bin/env node
/**
 * Pulls the canonical project catalogue from the personal site, which owns it.
 *
 *   npm run sync:projects
 *
 * The two sites are separate deployments, so there's no shared package to
 * import — this copies the file and stamps it read-only by convention. Edit
 * the catalogue in my-digital-orchard, then run this to bring the change over.
 */
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SOURCE =
  "https://raw.githubusercontent.com/stino180/my-digital-orchard/main/src/data/projects.ts";

const BANNER = `/**
 * SYNCED FILE — DO NOT EDIT HERE.
 *
 * The canonical catalogue lives in the my-digital-orchard repo at
 * src/data/projects.ts. Edit it there, then run \`npm run sync:projects\`.
 * Local edits to this file are overwritten by the next sync.
 */
`;

const here = dirname(fileURLToPath(import.meta.url));
const target = join(here, "..", "src", "data", "projects.ts");

const response = await fetch(SOURCE);
if (!response.ok) {
  console.error(
    `Could not fetch the catalogue: ${response.status} ${response.statusText}\n` +
      `Check that ${SOURCE} is reachable and the repo is public.`
  );
  process.exit(1);
}

const upstream = await response.text();

// Drop the source file's own header comment; ours replaces it.
const bodyStart = upstream.indexOf("export type");
if (bodyStart === -1) {
  console.error(
    "The fetched file doesn't look like the catalogue — no `export type` found. Aborting rather than writing garbage."
  );
  process.exit(1);
}

const next = BANNER + upstream.slice(bodyStart);

let previous = "";
try {
  previous = await readFile(target, "utf8");
} catch {
  // First run — nothing to compare against.
}

if (previous === next) {
  console.log("Catalogue already up to date.");
  process.exit(0);
}

await writeFile(target, next, "utf8");
console.log(
  previous
    ? "Catalogue updated. Review the diff before committing."
    : "Catalogue written."
);
