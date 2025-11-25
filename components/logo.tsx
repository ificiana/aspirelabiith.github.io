import Image from "next/image";

import nextConfig from "../next.config";

export function Logo() {
  return (
    <Image
      src={`${nextConfig.basePath}/logo.png`}
      alt="ASPIRE Lab Logo"
      width={48}
      height={48}
      className="object-contain"
    />
  );
}
