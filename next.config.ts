import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  reactStrictMode: true,
  // Silence Next.js 16 warning about having a webpack config with no turbopack config
  turbopack: {},
  // Allow phone access via LAN IP in dev without warnings (optional)
  allowedDevOrigins: process.env.ALLOW_DEV_ORIGIN
    ? [process.env.ALLOW_DEV_ORIGIN]
    : undefined,
};

export default nextConfig;
