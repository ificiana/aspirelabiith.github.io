import type { NextConfig } from "next";
import { FORKING_USERNAME } from "@/lib/constants";

const isForkedDeployment = Boolean(FORKING_USERNAME);
const computedBasePath = isForkedDeployment ? `/aspirelabiith.github.io` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isForkedDeployment ? computedBasePath : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
