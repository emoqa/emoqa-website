// Creates the blog admin account, or resets its password.
//   npm run admin:password
import { randomBytes, scryptSync } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { DatabaseSync } from "node:sqlite";

const MIN = 12;

// One readline interface for every prompt, with typing hidden when asked.
let hidden = false;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: process.stdin.isTTY });
const write = rl._writeToOutput?.bind(rl);
if (write) rl._writeToOutput = (s) => { if (!hidden || /[\r\n]/.test(s)) write(s); };
const ask = (question, hide = false) =>
  new Promise((resolve) => {
    rl.question(question, (answer) => {
      hidden = false;
      if (hide) process.stdout.write("\n");
      resolve(answer);
    });
    hidden = hide;
  });

if (!process.stdin.isTTY) {
  console.error("Run this in a terminal so you can type the password.");
  process.exit(1);
}

const username = (await ask("Admin username [admin]: ")).trim() || "admin";
const password = await ask(`New password (at least ${MIN} characters, hidden while typing): `, true);
if (password.length < MIN || password.length > 200) {
  console.error(`The password must be ${MIN} to 200 characters. Nothing was changed.`);
  process.exit(1);
}
if ((await ask("Type it again: ", true)) !== password) {
  console.error("The passwords do not match. Nothing was changed.");
  process.exit(1);
}
rl.close();

// Same format as lib/server/auth.ts
const N = 2 ** 16, r = 8, p = 1;
const salt = randomBytes(16);
const key = scryptSync(password, salt, 64, { N, r, p, maxmem: 256 * N * r });
const hash = `scrypt$${N}$${r}$${p}$${salt.toString("hex")}$${key.toString("hex")}`;

const dir = process.env.BLOG_DATA_DIR || path.join(process.cwd(), "data");
mkdirSync(dir, { recursive: true });
const db = new DatabaseSync(path.join(dir, "blog.db"));
db.exec(`
  PRAGMA busy_timeout = 5000;
  CREATE TABLE IF NOT EXISTS admin (id INTEGER PRIMARY KEY CHECK (id = 1), username TEXT NOT NULL, password_hash TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, expires_at INTEGER NOT NULL);
`);
db.prepare(`INSERT INTO admin (id, username, password_hash) VALUES (1, ?, ?)
  ON CONFLICT (id) DO UPDATE SET username = excluded.username, password_hash = excluded.password_hash`).run(username, hash);
db.exec("DELETE FROM sessions");
db.close();
console.log(`Saved. Sign in at /admin as "${username}".`);
