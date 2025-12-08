declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAConfig {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: unknown[];
    buildExcludes?: string[];
    disable?: boolean;
    fallbacks?: Record<string, string>;
    cacheOnFrontEndNav?: boolean;
    reloadOnOnline?: boolean;
    swcMinify?: boolean;
    [key: string]: unknown;
  }

  function withPWA(config?: PWAConfig): (nextConfig: NextConfig) => NextConfig;

  export default withPWA;
}
