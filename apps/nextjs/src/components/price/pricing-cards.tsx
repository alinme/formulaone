// @ts-ignore
// @ts-nocheck
"use client";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@saasfly/ui";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { Switch } from "@saasfly/ui/switch";

import { priceDataMap } from "~/config/price/price-data";

interface PricingCardsProps {
  dict: Record<string, string>;
  params: {
    lang: string;
  };
}

export function PricingCards({
  dict,
  params: { lang },
}: PricingCardsProps) {
  const isYearlyDefault = true;
  const [isYearly, setIsYearly] = useState<boolean>(isYearlyDefault);
  const pricingData = priceDataMap[lang];
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="font-titillium text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {dict.pricing}
        </p>
        <h2 className="font-f1 text-3xl leading-[1.1] text-foreground md:text-5xl">
          {dict.slogan}
        </h2>
      </div>

      <div className="mb-4 flex items-center gap-5 font-titillium text-sm text-muted-foreground">
        <span>{dict.monthly_bill}</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>{dict.annual_bill}</span>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map(
          (offer: {
            title:
              | boolean
              | Key
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | PromiseLikeOfReactNode
              | null
              | undefined;
            prices: {
              monthly:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | PromiseLikeOfReactNode
                | null
                | undefined;
              yearly: number;
            };
            benefits: any[];
            limitations: any[];
            id: string;
          }) => (
            <div
              className={cn(
                "relative flex flex-col overflow-hidden rounded-[8px] border",
                offer?.id === "pro" ? "border-[#e10600] bg-[#e10600]" : "border-border bg-card",
              )}
              key={offer?.title}
            >
              <div className={cn(
                "min-h-[150px] items-start space-y-4 p-6",
                offer?.id === "pro" ? "bg-[#e10600]" : "bg-card",
              )}>
                <p className={cn(
                  "font-titillium flex text-sm font-bold uppercase tracking-wider",
                  offer?.id === "pro" ? "text-white/90" : "text-muted-foreground",
                )}>
                  {offer?.title}
                </p>

                <div className="flex flex-row">
                  <div className="flex items-end">
                    <div className={cn(
                      "flex text-left font-f1 text-3xl font-semibold leading-6",
                      offer?.id === "pro" ? "text-white" : "text-card-foreground",
                    )}>
                      {isYearly && offer?.prices?.monthly > 0 ? (
                        <>
                          <span className={cn(
                            "mr-2 line-through",
                            offer?.id === "pro" ? "text-white/70" : "text-muted-foreground",
                          )}>
                            ${offer?.prices?.monthly}
                          </span>
                          <span>${offer?.prices?.yearly / 12}</span>
                        </>
                      ) : (
                        `$${offer?.prices?.monthly}`
                      )}
                    </div>
                    <div className={cn(
                      "-mb-1 ml-2 font-titillium text-left text-sm font-medium",
                      offer?.id === "pro" ? "text-white/80" : "text-muted-foreground",
                    )}>
                      <div>{dict.mo}</div>
                    </div>
                  </div>
                </div>
                {offer.prices.monthly > 0 ? (
                  <div className={cn(
                    "font-titillium text-left text-sm",
                    offer?.id === "pro" ? "text-white/80" : "text-muted-foreground",
                  )}>
                    {isYearly
                      ? `$${offer?.prices?.yearly} ${dict.annual_info}`
                      : `${dict.monthly_info}`}
                  </div>
                ) : null}
              </div>

              <div className="flex h-full flex-col justify-between gap-16 p-6">
                <ul className={cn(
                  "font-titillium space-y-2 text-left text-sm font-medium leading-normal",
                  offer?.id === "pro" ? "text-white" : "text-card-foreground",
                )}>
                  {offer?.benefits.map((feature) => (
                    <li className="flex items-start" key={feature}>
                      <Icons.Check className={cn(
                        "mr-3 h-5 w-5 shrink-0",
                        offer?.id === "pro" ? "text-white" : "text-[#e10600]",
                      )} />
                      <p>{feature}</p>
                    </li>
                  ))}

                  {offer?.limitations?.length > 0 &&
                    offer.limitations.map((feature) => (
                      <li
                        className={cn(
                          "flex items-start",
                          offer?.id === "pro" ? "text-white/80" : "text-muted-foreground",
                        )}
                        key={feature}
                      >
                        <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                        <p>{feature}</p>
                      </li>
                    ))}
                </ul>

                <Button
                  className={cn(
                    "w-full",
                    offer?.id === "pro" && "border-white text-white hover:bg-white/20 hover:text-white",
                  )}
                  variant={offer?.id === "pro" ? "outline" : "default"}
                >
                  {dict.signup ?? "Get Started"}
                </Button>
              </div>
            </div>
          ),
        )}
      </div>

      <p className="font-titillium mt-3 text-center text-base text-muted-foreground">
        <Balancer>
          Email{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@f1.onl"
          >
            support@f1.onl
          </a>{" "}
          {dict.contact}
          <br />
          <strong>{dict.contact_2}</strong>
        </Balancer>
      </p>
    </section>
  );
}
