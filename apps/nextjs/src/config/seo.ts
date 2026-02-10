import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

/** SEO image paths - replace placeholders in public/images/seo/ with real assets */
export const seoImages = {
  /** Open Graph default image (1200x630) - used when sharing on social */
  ogDefault: "/images/seo/og-default.png",
  /** Open Graph home page image (1200x630) */
  ogHome: "/images/seo/og-home.png",
  /** Twitter/X card image (1200x628) - summary_large_image */
  twitterCard: "/images/seo/twitter-card.png",
  /** Twitter/X header/banner (1500x500) - for profile or special campaigns */
  twitterHeader: "/images/seo/twitter-header.png",
  /** Default blog featured image (1200x630) */
  blogFeatured: "/images/seo/blog-featured-default.png",
  /** Logo for OG fallback (1200x630) */
  logoOg: "/images/seo/logo-og.png",
} as const;

/** Default OG image dimensions */
export const ogImageDimensions = {
  width: 1200,
  height: 630,
} as const;

/** Twitter card dimensions */
export const twitterImageDimensions = {
  width: 1200,
  height: 628,
} as const;

/** Full SEO description for F1 Online hub */
const seoDescription =
  "F1 Online is your hub for Formula 1 ticket availability, VIP passes, Paddock Club access, and F1 hospitality packages. Check availability for Grand Prix weekends worldwide.";

/** Extended keywords for SEO */
const seoKeywords = [
  "Formula 1 tickets",
  "F1 tickets",
  "F1 VIP passes",
  "Paddock Club",
  "F1 hospitality",
  "Grand Prix tickets",
  "Formula 1 VIP experience",
  "F1 paddock access",
  "F1 Experiences",
  "Monaco GP tickets",
  "Silverstone tickets",
  "motorsport hospitality",
  "F1 race weekend",
  "Formula 1 ticket availability",
  "F1 corporate hospitality",
];

/** Root metadata - works offline, fully static for crawlers */
export const rootMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | Formula 1 Tickets, VIP Passes & Hospitality`,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: "F1 Online", url: baseUrl }],
  creator: "F1 Online",
  publisher: "F1 Online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: baseUrl,
    languages: {
      en: `${baseUrl}/en`,
      zh: `${baseUrl}/zh`,
      ko: `${baseUrl}/ko`,
      ja: `${baseUrl}/ja`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Formula 1 Tickets, VIP Passes & Hospitality`,
    description: seoDescription,
    images: [
      {
        url: seoImages.ogDefault,
        width: ogImageDimensions.width,
        height: ogImageDimensions.height,
        alt: "F1 Online - Formula 1 Tickets, VIP Passes & Hospitality",
        type: "image/png",
      },
      {
        url: seoImages.ogHome,
        width: ogImageDimensions.width,
        height: ogImageDimensions.height,
        alt: "F1 Online - Your hub for Formula 1 tickets and experiences",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Formula 1 Tickets, VIP Passes & Hospitality`,
    description: seoDescription,
    images: [seoImages.twitterCard],
    image: seoImages.twitterCard,
    imageAlt: "F1 Online - Formula 1 Tickets, VIP Passes & Hospitality",
    creator: "@f1online",
    site: "@f1online",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "sports",
  classification: "Formula 1, Motorsport, Sports, Tickets",
  other: {
    "theme-color": "#e10600",
    "msapplication-TileColor": "#e10600",
  },
};

/** Generate blog post OG image path - use default if not provided */
export function getBlogOgImage(slug?: string): string {
  if (slug) {
    return `/images/seo/blog/${slug}-featured.png`;
  }
  return seoImages.blogFeatured;
}
