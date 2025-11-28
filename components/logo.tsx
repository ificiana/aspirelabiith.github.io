import Image from "next/image";
import LogoImage from "../public/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={LogoImage}
      alt="ASPIRE Lab Logo"
      className={`object-contain ${className}`}
    />
  );
}
