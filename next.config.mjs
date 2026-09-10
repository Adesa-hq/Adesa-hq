/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Legacy URL redirects (GSC 404 fixes) ──────────────────────────
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/subsidiaries/energy",
        destination: "/subsidiaries",
        permanent: true,
      },
      {
        source: "/subsidiaries/:slug",
        destination: "/subsidiaries",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
