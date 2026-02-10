"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@saasfly/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { i18n, localeMap } from "~/config/i18n-config";

const localeShortMap: Record<string, string> = {
  en: "EN",
  zh: "中文",
  ko: "KO",
  ja: "JA",
};

export function LocaleChange({
  url,
  currentLang,
}: {
  url: string;
  currentLang?: string;
}) {
  const router = useRouter();
  const label = currentLang
    ? localeShortMap[currentLang] ?? currentLang.toUpperCase()
    : "EN";

  function onClick(locale: string) {
    router.push(`/${locale}/` + url);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <span className="font-medium">{label}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div>
          {i18n.locales.map((locale) => {
            return (
              // <Link href={redirectedPathName(locale)}>{locale}</Link>
              <DropdownMenuItem key={locale} onClick={() => onClick(locale)}>
                <span>{localeMap[locale]}</span>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
