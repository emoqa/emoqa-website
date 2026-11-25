import "server-only";
import { mkdirSync } from "node:fs";
import path from "node:path";
import schema from "./schema.json";
import { seedPosts } from "./seed-posts";

/**
 * One small async interface over two databases with the same SQL:
 * - Turso, when TURSO_DATABASE_URL is set (Vercel, where files do not persist)
 * - a local SQLite file otherwise (your computer, or a server of your own)
 */
export type Value = string | number | null | Uint8Array;
export type Row = Record<string, unknown>;
type Driver = {
  all(sql: string, args: Value[]): Promise<Row[]>;
  run(sql: string, args: Value[]): Promise<{ lastId: number }>;
};

export const isRemote = !!process.env.TURSO_DATABASE_URL;

/** False on free hosts that wipe their files. Set EPHEMERAL_STORAGE=1 there. */
export const storageLasts = isRemote || !process.env.EPHEMERAL_STORAGE;

// Keep this outside the deploy folder in production, or a deploy can wipe it.
export const DATA_DIR = process.env.BLOG_DATA_DIR || path.join(/* turbopackIgnore: true */ process.cwd(), "data");
export const UPLOAD_DIR = path.join(/* turbopackIgnore: true */ DATA_DIR, "uploads");

// Tables are created once by scripts/copy-to-turso.mjs, not on every cold start.
async function openRemote(): Promise<Driver> {
  const { createClient } = await import("@libsql/client/web");
  const client = createClient({ url: process.env.TURSO_DATABASE_URL!, authToken: process.env.TURSO_AUTH_TOKEN });
  return {
    async all(sql, args) {
      const res = await client.execute({ sql, args });
      return res.rows.map((r) => Object.fromEntries(res.columns.map((c) => [c, r[c]])));
    },
    async run(sql, args) {
      const res = await client.execute({ sql, args });
      return { lastId: Number(res.lastInsertRowid ?? 0) };
    },
  };
}

async function openLocal(): Promise<Driver> {
  // On Vercel this would only fail later with a confusing read-only error.
  if (process.env.VERCEL) throw new Error("TURSO_DATABASE_URL is not set. Connect the Turso database to this Vercel project.");
  const { DatabaseSync } = await import("node:sqlite");
  mkdirSync(UPLOAD_DIR, { recursive: true });
  const db = new DatabaseSync(path.join(/* turbopackIgnore: true */ DATA_DIR, "blog.db"));
  db.exec("PRAGMA busy_timeout = 5000; PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");
  for (const sql of schema) db.exec(sql);

  // Runs once per database, so deleting the sample posts is permanent.
  db.exec("BEGIN IMMEDIATE");
  try {
    if (!db.prepare("SELECT 1 FROM meta WHERE key = 'seeded'").get()) {
      const insert = db.prepare(`
        INSERT INTO posts (slug, title, excerpt, content, category, author, accent, icon, status, publish_at, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, 'Emoqa Team', ?, ?, 'published', ?, ?, ?)`);
      for (const p of seedPosts) {
        insert.run(p.slug, p.title, p.excerpt, p.content, p.category, p.accent, p.icon, p.date, p.date, p.date);
      }
      db.prepare("INSERT INTO meta (key, value) VALUES ('seeded', '1')").run();
    }
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
  return {
    all: async (sql, args) => db.prepare(sql).all(...args) as Row[],
    run: async (sql, args) => ({ lastId: Number(db.prepare(sql).run(...args).lastInsertRowid) }),
  };
}

// Survives dev hot reloads, and opens lazily so a build never creates a database.
const store = globalThis as unknown as { __blogDriver?: Promise<Driver> };
function driver() {
  return (store.__blogDriver ??= (isRemote ? openRemote() : openLocal()).catch((e) => {
    store.__blogDriver = undefined; // try again on the next request
    throw e;
  }));
}

export const all = async (sql: string, ...args: Value[]) => (await driver()).all(sql, args);
export const get = async (sql: string, ...args: Value[]): Promise<Row | undefined> => (await all(sql, ...args))[0];
export const run = async (sql: string, ...args: Value[]) => (await driver()).run(sql, args);
