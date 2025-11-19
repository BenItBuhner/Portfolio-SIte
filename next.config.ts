import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  reactStrictMode: true,
  // Silence Next.js 16 warning about having a webpack config with no turbopack config
  turbopack: {},
  // Allow phone access via LAN IP in dev without warnings (optional)
  allowedDevOrigins: process.env.ALLOW_DEV_ORIGIN
    ? [process.env.ALLOW_DEV_ORIGIN]
    : undefined,
};

export default withPWA({
  dest: "public",
  // SW should only register in production builds to avoid reload loops in dev
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
})(nextConfig);
