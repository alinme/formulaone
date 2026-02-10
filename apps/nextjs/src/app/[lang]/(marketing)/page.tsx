import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "~/lib/get-dictionary";

import { Comments } from "~/components/comments";
import { FeaturesGrid } from "~/components/features-grid";
import { HeroSection } from "~/components/hero-section";
import { VideoScroll } from "~/components/video-scroll";

import * as Icons from "@saasfly/ui/icons";

import type { Locale } from "~/config/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  const marketing = dict.marketing as Record<string, unknown>;
  const rightSide = marketing?.right_side as Record<string, string> | undefined;

  return (
    <>
      <HeroSection
        title={String(marketing?.title ?? "Experience the pinnacle of motorsport ")}
        subtitle={String(marketing?.sub_title ?? "Races, schedules, and exclusive events worldwide.")}
        rightSide={rightSide}
      />

      <section id="features" className="container border-t border-border py-20 md:py-24">
        <h2 className="font-f1 mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
          {String(marketing?.features ?? "Features")}
        </h2>
        <FeaturesGrid dict={marketing?.features_grid as Record<string, string> | undefined} />
      </section>

      <section className="container border-t border-border py-16">
        <div className="flex flex-col items-center justify-center pt-6">
          <p className="font-titillium text-center text-lg text-muted-foreground">
            {typeof marketing?.sponsor?.title === "string" ? marketing.sponsor.title : "Loved by our Sponsors"}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <Link href="https://go.clerk.com/uKDp7Au" target="_blank" rel="noopener noreferrer">
              <Image src="/images/clerk.png" width="48" height="48" alt="Clerk" />
            </Link>
            <Link href="https://www.twillot.com/" target="_blank" rel="noopener noreferrer">
              <Image src="https://www.twillot.com/logo-128.png" width="48" height="48" alt="Twillot" />
            </Link>
            <Link href="https://www.setupyourpay.com/" target="_blank" rel="noopener noreferrer">
              <Image src="https://www.setupyourpay.com/logo.png" width="48" height="48" alt="SetupYourPay" />
            </Link>
            <Link href="https://opencollective.com/saasfly" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-border px-4 py-2 transition-colors hover:border-[#e10600]/50 hover:bg-accent/50">
                <Icons.Heart className="h-5 w-5 fill-[#e10600] text-[#e10600]" />
                <span className="font-titillium text-sm font-medium text-foreground">
                  {typeof marketing?.sponsor?.donate === "string" ? marketing.sponsor.donate : "Support us"}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="container border-t border-border py-12">
        <VideoScroll dict={marketing?.video as Record<string, string> | undefined} />
      </section>

      <section className="w-full border-t border-border px-4 py-16 sm:px-0 md:py-24">
        <div className="container flex flex-col items-center">
          <h2 className="font-f1 mb-4 text-center text-2xl font-semibold text-foreground md:text-4xl">
            {typeof marketing?.people_comment?.title === "string"
              ? marketing.people_comment.title
              : "What People Are Saying"}
          </h2>
          <p className="font-titillium mb-10 max-w-xl text-center text-lg text-muted-foreground">
            {typeof marketing?.people_comment?.desc === "string"
              ? marketing.people_comment.desc
              : "Don't just take our word for it."}
          </p>
          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
