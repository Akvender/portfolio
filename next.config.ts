import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Dwa layouty językowe (app/(pl), app/(en)) — strona 404 ma własny <html>.
  experimental: { globalNotFound: true },
};

export default nextConfig;
