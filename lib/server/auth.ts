import "server-only";
import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ApiError } from "./api-error";
import { get, run } from "./db";
import { clearLimit, clientIp, limit } from "./rate-limit";

const COOKIE = "emoqa_admin";
const SESSION_MS = 12 * 60 * 60 * 1000;

// ─── Passwords. Format must match scripts/admin-password.mjs ───

const N = 2 ** 16, R = 8, P = 1, KEY_LEN = 64;

function derive(password: string, salt: Buffer, n: number, r: number, p: number, len: number) {
  return new Promise<Buffer>((resolve, reject) =>
    scrypt(password, salt, len, { N: n, r, p, maxmem: 256 * n * r }, (e, key) => (e ? reject(e) : resolve(key))),
  );
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const key = await derive(password, salt, N, R, P, KEY_LEN);
  return `scrypt$${N}$${R}$${P}$${salt.toString("hex")}$${key.toString("hex")}`;
}

async function verifyPassword(password: string, stored: string) {
  const [, n, r, p, salt, key] = stored.split("$");
  const expected = Buffer.from(key, "hex");
  const actual = await derive(password, Buffer.from(salt, "hex"), Number(n), Number(r), Number(p), expected.length);
  return timingSafeEqual(actual, expected);
}

export function checkNewPassword(password: unknown): string {
  if (typeof password !== "string" || password.length < 12) throw new ApiError(400, "Use a password of at least 12 characters.");
  if (password.length > 200) throw new ApiError(400, "That password is too long.");
  return password;
}

async function getAdmin() {
  return (await get("SELECT username, password_hash FROM admin WHERE id = 1")) as
    | { username: string; password_hash: string }
    | undefined;
}

// ─── Login attempt limits ───

const guard = (ip: string) =>
  limit(
    [{ key: `login:${ip}`, max: 5 }, { key: "login:*", max: 60 }],
    15 * 60 * 1000,
    "Too many attempts. Please wait 15 minutes and try again.",
  );

// ─── Sessions ───

const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");

async function startSession() {
  const token = randomBytes(32).toString("base64url");
  await run("DELETE FROM sessions WHERE expires_at < ?", Date.now());
  await run("INSERT INTO sessions (token_hash, expires_at) VALUES (?, ?)", hashToken(token), Date.now() + SESSION_MS);
  (await cookies()).set(COOKIE, token, {
    httpOnly: true, sameSite: "strict", path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MS / 1000,
  });
}

export async function login(req: Request, username: unknown, password: unknown) {
  if (typeof username !== "string" || typeof password !== "string" || password.length > 200) {
    throw new ApiError(400, "Enter your username and password.");
  }
  const ip = clientIp(req);
  await guard(ip);
  const admin = await getAdmin();
  if (!admin) throw new ApiError(503, "No admin account yet. Run: npm run admin:password");
  // Always verify, so a wrong username takes as long as a wrong password.
  const passwordOk = await verifyPassword(password, admin.password_hash);
  if (!passwordOk || username.trim().toLowerCase() !== admin.username.toLowerCase()) {
    throw new ApiError(401, "Incorrect username or password.");
  }
  await clearLimit(`login:${ip}`);
  await startSession();
}

export async function logout() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) await run("DELETE FROM sessions WHERE token_hash = ?", hashToken(token));
  jar.delete(COOKIE);
}

export async function changePassword(req: Request, current: unknown, next: unknown) {
  const password = checkNewPassword(next);
  const ip = clientIp(req);
  await guard(ip);
  const admin = await getAdmin();
  if (!admin || typeof current !== "string" || current.length > 200 || !(await verifyPassword(current, admin.password_hash))) {
    throw new ApiError(400, "Your current password is incorrect.");
  }
  await clearLimit(`login:${ip}`);
  await run("UPDATE admin SET password_hash = ? WHERE id = 1", await hashPassword(password));
  await run("DELETE FROM sessions"); // sign out every other device
  await startSession();
}

/** The signed-in admin's username, or null. */
export async function getSession(): Promise<string | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const row = await get("SELECT 1 FROM sessions WHERE token_hash = ? AND expires_at > ?", hashToken(token), Date.now());
  return row ? ((await getAdmin())?.username ?? null) : null;
}

/** Call in every admin page. Layouts alone do not protect pages. */
export async function requireAdmin() {
  const user = await getSession();
  if (!user) redirect("/admin/login/");
  return user;
}
