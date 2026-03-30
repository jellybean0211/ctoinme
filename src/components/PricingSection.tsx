"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

const features = [
  "Full course content",
  "50+ hands-on projects",
  "Videos + docs + source code",
  "Member-exclusive templates included",
  "Continuous updates",
  "Q&A group guidance",
  "Student-exclusive community",
];

const plans = [
  {
    id: "6month" as const,
    name: "6 Month",
    price: "RM399",
    period: "/6 months",
    monthlyPrice: "RM66.50/mo",
    description: "Get started with full access for half a year",
    badge: "Shorter commitment",
  },
  {
    id: "1year" as const,
    name: "1 Year",
    price: "RM499",
    period: "/year",
    monthlyPrice: "RM41.58/mo",
    compareAt: "RM66.50/mo",
    description: "Complete hands-on AI coding course, from zero to mastery",
    badge: "Best Value",
  },
];

export function PricingSection({ waitlistOnly }: { waitlistOnly: boolean }) {
  const [activePlanId, setActivePlanId] = useState<(typeof plans)[number]["id"]>("1year");
  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? plans[1];

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden px-4 py-20 md:py-32"
      style={{
        backgroundColor: "hsl(var(--muted) / 0.3)",
        backgroundImage:
          "linear-gradient(rgba(128,128,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          {waitlistOnly ? "Waitlist" : "Pricing"}
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          {waitlistOnly ? "Join The Waitlist" : "Pricing"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {waitlistOnly
            ? "Leave your email to get first access, launch pricing, and the exact date enrollment opens."
            : "Choose the plan that fits you and start your AI coding journey today."}
        </p>

        <>
          <div className="mx-auto mt-12 flex w-fit rounded-2xl bg-muted/50 p-2">
            <div className="grid grid-cols-2 gap-2">
              {plans.map((plan) => {
                const isActive = plan.id === activePlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setActivePlanId(plan.id)}
                    className={`rounded-xl px-4 py-3 text-left transition ${
                      isActive
                        ? "bg-background shadow-sm"
                        : "text-muted-foreground hover:bg-background/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{plan.name}</span>
                      <span className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                        {plan.id === "1year" ? "Default" : "Option"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm">{plan.price}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-border bg-card p-4 text-left shadow-xl md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
                    {activePlan.badge}
                  </span>
                  {activePlan.id === "1year" ? (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      37.5% cheaper
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{activePlan.name}</h3>
                <p className="mt-2 text-muted-foreground">{activePlan.description}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl bg-background/70 p-6">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold">{activePlan.price}</span>
                  <span className="pb-1 text-lg text-muted-foreground">{activePlan.period}</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-medium text-muted-foreground">{activePlan.monthlyPrice}</span>
                  {activePlan.compareAt ? (
                    <span className="text-sm text-muted-foreground line-through">{activePlan.compareAt}</span>
                  ) : null}
                </div>

                <WaitlistTrigger
                  planName={activePlan.name}
                  source={`pricing_${activePlan.name.toLowerCase().replace(/\s+/g, "_")}`}
                  className="mt-6 w-full rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90"
                >
                  Join Waitlist
                </WaitlistTrigger>
              </div>

              <div className="rounded-2xl border border-border/60 bg-muted/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  Included
                </p>
                <ul className="mt-4 space-y-3 text-left">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="size-5 shrink-0 text-foreground/50" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {waitlistOnly ? (
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-card p-6 text-left shadow-xl">
              <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                <p className="text-sm font-medium">What happens next</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-foreground/50" />
                    You get launch updates and the opening date first
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-foreground/50" />
                    You get first access when enrollment opens
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-foreground/50" />
                    You hear about launch pricing and curriculum updates
                  </li>
                </ul>
              </div>

              <WaitlistTrigger
                source="landing_page_waitlist"
                className="mt-6 w-full rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90"
              >
                Join Waitlist
              </WaitlistTrigger>
            </div>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">
              14-day money-back guarantee. If you&apos;re not satisfied, you get a full refund — no
              questions asked.
            </p>
          )}
        </>

      </div>
    </section>
  );
}
