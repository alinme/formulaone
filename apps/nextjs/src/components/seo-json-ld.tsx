import { siteConfig } from "~/config/site";

/** JSON-LD structured data for SEO - renders in HTML, works offline */
export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description:
          "F1 Online is your hub for Formula 1 ticket availability, VIP passes, Paddock Club access, and F1 hospitality packages.",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: ["en", "zh", "ko", "ja"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/en?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/seo/logo-og.png`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: `${siteConfig.name} | Formula 1 Tickets, VIP Passes & Hospitality`,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: [
          {
            "@type": "Thing",
            name: "Formula 1 tickets",
          },
          {
            "@type": "Thing",
            name: "F1 VIP passes",
          },
          {
            "@type": "Thing",
            name: "Paddock Club",
          },
          {
            "@type": "Thing",
            name: "F1 hospitality",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
