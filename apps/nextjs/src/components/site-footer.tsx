import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@saasfly/ui";

import { ModeToggle } from "~/components/mode-toggle";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies Policy", href: "#" },
  { label: "Legal Notices", href: "#" },
  { label: "Formula 1", href: "#" },
  { label: "F1 Experiences", href: "#" },
];

export function SiteFooter({
  className,
}: {
  className?: string;
  params: {
    lang: string;
  };

  dict: Record<string, string | Record<string, string>>;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("footer-bg border-t border-border", className)}>
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-8 md:py-10">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="flex w-full items-center gap-2">
            <Image
              src="/images/logo-footer.svg"
              width={120}
              height={20}
              alt="Formula One"
              className="h-[1em] w-auto shrink-0"
            />
            <div
              className="grow"
              style={{ "--f1rd-racingline-size": "16px" } as React.CSSProperties}
            >
              <svg
                fill="none"
                viewBox="0 0 25200 200"
                preserveAspectRatio="none"
                className="block h-[var(--f1rd-racingline-size)] min-w-[calc(var(--f1rd-racingline-size)*3)] w-full"
                role="presentation"
              >
                <title />
                <g style={{ fill: "#e10600" }}>
                  <path d="M200 0h25000v91h-25091Z" />
                  <path d="M0 200h25200v-97h-25103Z" />
                </g>
              </svg>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:justify-start">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-titillium text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="font-titillium text-xs leading-relaxed text-muted-foreground">
            <p>© 2003-{currentYear} Formula One Online Limited</p>
            <p>
              F1® Online is operated by Quint International, LLC and is authorised to do so by Formula One Digital Media Limited.
            </p>
          </div>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
