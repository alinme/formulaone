import { PricingCards } from "~/components/price/pricing-cards";
import { PricingFaq } from "~/components/price/pricing-faq";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata = {
  title: "Tickets & Packages",
  description:
    "Check availability for Formula 1 tickets, VIP passes, Paddock Club and F1 hospitality packages. General Admission, Paddock Club, and VIP experiences.",
  openGraph: {
    title: "Tickets & Packages | F1 Online",
    description:
      "Formula 1 tickets, VIP passes, Paddock Club and hospitality availability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tickets & Packages | F1 Online",
  },
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        dict={dict.price}
        params={{ lang }}
      />
      <hr className="container" />
      <PricingFaq params={{ lang }} dict={dict.price} />
    </div>
  );
}
