// Creates the tables in Turso and copies the local blog into it. Safe to run again: it refuses a database that has posts.
//   TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... npm run db:copy-to-turso
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { createClient } from "@libsql/client/web";

const { TURSO_DATABASE_URL: url, TURSO_AUTH_TOKEN: authToken } = process.env;
if (!url) {
  console.error("Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN first.");
  process.exit(1);
}
const dir = process.env.BLOG_DATA_DIR || path.join(process.cwd(), "data");
const local = new DatabaseSync(path.join(dir, "blog.db"), { readOnly: true });
const remote = createClient({ url, authToken });

await remote.batch(JSON.parse(readFileSync(new URL("../lib/server/schema.json", import.meta.url), "utf8")), "write");
if (Number((await remote.execute("SELECT COUNT(*) AS n FROM posts")).rows[0].n) > 0) {
  console.error("This Turso database already has posts. Nothing was changed.");
  process.exit(1);
}

const exists = (t) => local.prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?").get(t);
const rows = [];
for (const table of ["admin", "posts", "revisions", "media", "inquiries", "meta"]) {
  if (!exists(table)) continue;
  for (const r of local.prepare(`SELECT * FROM ${table}`).all()) {
    const cols = Object.keys(r);
    rows.push({ sql: `INSERT INTO ${table} (${cols.join(", ")}) VALUES (${cols.map(() => "?").join(", ")})`, args: Object.values(r) });
  }
}
await remote.batch(rows, "write"); // all or nothing

let images = 0;
for (const { name } of local.prepare("SELECT name FROM media").all()) {
  const file = path.join(dir, "uploads", name);
  if (!existsSync(file)) { console.warn("Missing file, skipped:", name); continue; }
  await remote.execute({ sql: "INSERT OR REPLACE INTO media_files (name, bytes) VALUES (?, ?)", args: [name, new Uint8Array(readFileSync(file))] });
  images++;
}
console.log(`Copied ${rows.length} rows and ${images} images.`);
