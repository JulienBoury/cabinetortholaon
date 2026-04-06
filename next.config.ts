import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cabinetortholaon",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
