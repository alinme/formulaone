import "~/styles/globals.css";

import { NextDevtoolsProvider } from "@next-devtools/core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@saasfly/ui";
import { Toaster } from "@saasfly/ui/toaster";

import { SeoJsonLd } from "~/components/seo-json-ld";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { i18n } from "~/config/i18n-config";
import { rootMetadata } from "~/config/seo";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        {/*<Suspense>*/}
        {/*  <PostHogPageview />*/}
        {/*</Suspense>*/}
        <body
          className={cn(
            "min-h-screen font-f1 antialiased",
          )}
        >
          <SeoJsonLd />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            storageKey="f1-theme"
          >
            <NextDevtoolsProvider>{children}</NextDevtoolsProvider>
            {process.env.NEXT_PUBLIC_VERCEL === "1" && (
              <>
                <Analytics />
                <SpeedInsights />
              </>
            )}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
  );
}
