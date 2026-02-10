"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";
import { DocumentGuide } from "~/components/document-guide";
import { MobileNav } from "~/components/mobile-nav";

import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  params: {
    lang: string;
  };
  marketing?: Record<string, string | object>;
}

export function MainNav({ items, children, params: { lang }, marketing }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleMenuItemClick = () => {
    toggleMenu();
  };
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-center">
        <Link href={`/${lang}`} className="hidden items-center space-x-2 md:flex">
          <Image
            src="/images/logo-light.png"
            alt="Formula One"
            width={140}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/images/logo-dark.png"
            alt="Formula One"
            width={140}
            height={40}
            className="hidden dark:block"
          />
        </Link>

        <Link href="https://docs.f1.onl" target="_blank" className="ml-4 hidden md:flex lg:flex xl:flex font-titillium">
          <DocumentGuide>
            {typeof marketing?.introducing === "string" ? marketing?.introducing : "2025 Season Calendar"}
          </DocumentGuide>
        </Link>
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close/> : <Icons.Logo/>}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} menuItemClick={handleMenuItemClick}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
