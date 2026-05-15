import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/sley_agent",
  // assetPrefix: "/sley_agent",
  images: { unoptimized: true },
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: "/sley_agent",
  // },
};
export default nextConfig;
