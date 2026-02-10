import { Card } from "@saasfly/ui/card"
import * as Icons from "@saasfly/ui/icons";

export function FeaturesGrid({ dict } : { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex gap-4 flex-col sm:flex-row md:flex-row xl:flex-row">
      <Card className="w-full p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e10600]/20">
              <Icons.Blocks className="h-6 w-6 text-[#e10600]" />
            </div>
            <h2 className="font-f1 text-lg font-semibold text-card-foreground">{dict?.monorepo_title}</h2>
          </div>
          <p className="font-titillium leading-relaxed text-muted-foreground">
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card variant="featured" className="w-full p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Icons.Languages className="h-6 w-6 text-white dark:text-white" />
            </div>
            <h2 className="font-f1 text-lg font-semibold text-card-foreground">{dict?.i18n_title}</h2>
          </div>
          <p className="font-titillium leading-relaxed text-card-foreground/90">
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card className="w-full p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e10600]/20">
              <Icons.Billing className="h-6 w-6 text-[#e10600]" />
            </div>
            <h2 className="font-f1 text-lg font-semibold text-card-foreground">{dict?.payments_title}</h2>
          </div>
          <p className="font-titillium leading-relaxed text-muted-foreground">
            {dict?.payments_desc}
          </p>
        </div>
      </Card>

      <Card className="w-full p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e10600]/20">
              <Icons.ShieldCheck className="h-6 w-6 text-[#e10600]" />
            </div>
            <h2 className="font-f1 text-lg font-semibold text-card-foreground">{dict?.nextauth_title}</h2>
          </div>
          <p className="font-titillium leading-relaxed text-muted-foreground">
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  )
}
