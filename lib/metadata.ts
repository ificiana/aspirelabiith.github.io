import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata({
  title,
  description,
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const baseKeywords = [
    "robotics",
    "autonomous systems",
    "IIT Hyderabad",
    "artificial intelligence",
    "machine learning",
  ];

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    openGraph: {
      title,
      description,
      type,
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.fullName} Lab at ${SITE_CONFIG.institution}. Research in autonomous robots, deep learning, computer vision, and intelligent control.`,
  keywords: [
    "robotics",
    "autonomous systems",
    "IIT Hyderabad",
    "artificial intelligence",
    "machine learning",
    "computer vision",
    "control systems",
  ],
  authors: [{ name: `${SITE_CONFIG.name}, ${SITE_CONFIG.institution}` }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.institution,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    description: SITE_CONFIG.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    description: SITE_CONFIG.fullName,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
