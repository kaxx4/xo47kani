import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `output: "standalone"` is for self-hosting / Docker (produces .next/standalone).
  // On Vercel, leave output undefined so Vercel's native build pipeline handles it
  // (standalone is unnecessary there and can interfere with asset tracing).
  output: process.env.VERCEL ? undefined : "standalone",

  async headers() {
    return [
      {
        // Stable photographic assets — cache hard at the edge/browser.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Sensible baseline security headers for every response.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
