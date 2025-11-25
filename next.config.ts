import type { NextConfig } from "next";

const BASEPATH = "/aspirelabiith.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASEPATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
