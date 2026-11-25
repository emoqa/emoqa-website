import type { NextConfig } from "next";
import path from "path";

// Set by scripts/build.mjs for the static copy on emoqa.in
const isStatic = process.env.STATIC_EXPORT === "1";

// Addresses used before the product portfolio was restructured.
async function redirects() {
  return [
    { source: "/products/cms", destination: "/products/digital-signage-cms/", permanent: true },
    { source: "/products/healthcare", destination: "/products/healthcare-kiosk/", permanent: true },
    { source: "/products/ai", destination: "/products/ai-teacher/", permanent: true },
  ];
}

async function headers() {
  return [
    {
      source: "/admin/:path*",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Robots-Tag", value: "noindex, nofollow" },
        { key: "Cache-Control", value: "no-store" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ];
}

const nextConfig: NextConfig = {
  // Used by the deploy workflow: a self-contained server in .next/standalone.
  output: isStatic ? "export" : process.env.BUILD_STANDALONE ? "standalone" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  // A static host cannot redirect or set headers.
  ...(isStatic ? {} : { redirects, headers }),
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
