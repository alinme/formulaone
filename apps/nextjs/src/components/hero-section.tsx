"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

const vercelUrl =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaasfly%2Fsaasfly&env=NEXT_PUBLIC_APP_URL&install-command=bun%20install&build-command=bun%20run%20build&root-directory=apps%2Fnextjs";
const cloudflareUrl = "https://oneclick.sh/";
const showcaseUrl = "https://discord.gg/b9uTZjdkrb";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  rightSide?: {
    deploy_on_vercel_title?: string;
    ship_on_cloudflare_title?: string;
    showcase_title?: string;
  };
}

export function HeroSection({ title, subtitle, rightSide }: HeroSectionProps) {
  const deployLabel = rightSide?.deploy_on_vercel_title ?? "Deploy on Vercel";
  const cloudflareLabel = rightSide?.ship_on_cloudflare_title ?? "Ship on Cloudflare";
  const showcaseLabel = rightSide?.showcase_title ?? "Best Practice & Showcase";

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-background/50 to-background px-4 py-24 md:py-32 lg:py-40">
      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={item}
            className="font-f1 max-w-4xl text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            {title}
            <span className="text-[#e10600]"> Formula 1</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-titillium mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link href={vercelUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full px-6 font-f1 text-base shadow-lg transition-all hover:shadow-[#e10600]/30"
              >
                <Icons.Rocket className="mr-2 h-4 w-4" />
                {deployLabel}
              </Button>
            </Link>
            <Link href={cloudflareUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-foreground px-6 font-f1 text-base text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Icons.Cloud className="mr-2 h-4 w-4" />
                {cloudflareLabel}
              </Button>
            </Link>
            <Link href={showcaseUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-6 font-f1 text-base"
              >
                <Icons.ThumbsUp className="mr-2 h-4 w-4" />
                {showcaseLabel}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
