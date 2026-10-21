import type { NextConfig } from "next";

/** Applied to every response. See SECURITY_AUDIT.md #6. */
const securityHeaders = [
  // No one may frame the site; the CSP form and the legacy header for older browsers.
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Netlify's Image CDN serves /_next/image and runs a fresh transform for
    // every width, quality, or junk query parameter, so anyone could burn the
    // plan's usage. Images under public/ ship pre-sized and compressed instead.
    unoptimized: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
