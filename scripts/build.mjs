// npm run build
// - on GitHub Actions for emoqa/emoqa-website: a static site in out/, which the workflow copies to emoqa.in
// - anywhere else (Render, your computer): the normal server build
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const isStatic = process.env.STATIC_EXPORT === "1" || process.env.GITHUB_REPOSITORY === "emoqa/emoqa-website";
const run = (env = {}) => spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], { stdio: "inherit", env: { ...process.env, ...env } }).status ?? 1;

if (!isStatic) process.exit(run());

// This edits the source, so it only runs in a throwaway copy.
if (!process.env.CI) {
  console.error("The static build changes source files. Run it in a fresh clone with CI=1 STATIC_EXPORT=1.");
  process.exit(1);
}

// A static host has no server, so the parts that need one are left out.
for (const dir of ["app/admin", "app/api", "app/media"]) rmSync(dir, { recursive: true, force: true });

const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]));
for (const f of files("app").filter((n) => /\.tsx?$/.test(n))) {
  const s = readFileSync(f, "utf8");
  if (s.includes('export const dynamic = "force-dynamic";')) writeFileSync(f, s.replace('export const dynamic = "force-dynamic";', 'export const dynamic = "force-static";'));
}
const article = "app/blogs/[slug]/page.tsx";
writeFileSync(article, `${readFileSync(article, "utf8").replace('import { getPublished } from "@/lib/server/posts";', 'import { getPublished, listPublished } from "@/lib/server/posts";')}
export const dynamicParams = false;
export const generateStaticParams = async () => (await listPublished()).map((p) => ({ slug: p.slug }));
`);

const status = run({
  STATIC_EXPORT: "1",
  // Inquiries go to the copy on Render, which keeps the Google Sheet address private.
  NEXT_PUBLIC_INQUIRY_URL: process.env.NEXT_PUBLIC_INQUIRY_URL || "https://emoqa-website-qqti.onrender.com/api/inquiry/",
});
if (status) process.exit(status);

// Addresses used before the product portfolio was restructured.
const moved = { "products/cms": "/products/digital-signage-cms/", "products/healthcare": "/products/healthcare-kiosk/", "products/ai": "/products/ai-teacher/" };
for (const [from, to] of Object.entries(moved)) {
  mkdirSync(`out/${from}`, { recursive: true });
  writeFileSync(`out/${from}/index.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>EMOQA</title><link rel="canonical" href="https://www.emoqa.in${to}"><meta http-equiv="refresh" content="0; url=${to}"></head><body><a href="${to}">This page has moved</a></body></html>\n`);
}
console.log("Static site written to out/");
