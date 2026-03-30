"use client"

import { useActionState, useState } from "react"
import { Check, X } from "lucide-react"
import { joinWaitlist, type WaitlistState } from "@/app/actions"

const features = [
  "Full course content",
  "50+ hands-on projects",
  "Videos + docs + source code",
  "Member-exclusive templates included",
  "Continuous updates",
  "Q&A group guidance",
  "Student-exclusive community",
]

const plans = [
  {
    id: "6month" as const,
    name: "6-Month Plan",
    price: "RM399",
    period: "/6 months",
    description: "Get started with full access for half a year",
    highlighted: false,
    badge: null,
  },
  {
    id: "1year" as const,
    name: "1-Year Plan",
    price: "RM499",
    period: "/year",
    description: "Complete hands-on AI coding course, from zero to mastery",
    highlighted: true,
    badge: "Best Value",
  },
]

const initialWaitlistState: WaitlistState = {
  error: null,
  success: null,
}

export function PricingSection({ waitlistOnly }: { waitlistOnly: boolean }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [waitlistState, waitlistAction, waitlistPending] = useActionState(
    joinWaitlist,
    initialWaitlistState
  )

  function openWaitlist(planName: string) {
    setSelectedPlan(planName)
  }

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
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {waitlistOnly
            ? "Leave your email and we will notify you as soon as the course opens."
            : "Choose the plan that fits you and start your AI coding journey today."}
        </p>

        {waitlistOnly ? (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-8 text-left shadow-xl">
            <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
              <p className="text-sm font-medium">What happens next</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Check className="size-4 shrink-0 text-foreground/50" />
                  You get early launch updates
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-4 shrink-0 text-foreground/50" />
                  You hear first when enrollment opens
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-4 shrink-0 text-foreground/50" />
                  You stay in the loop as the curriculum evolves
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openWaitlist("waitlist_only")}
              className="mt-6 w-full rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90"
            >
              Join Waitlist
            </button>
          </div>
        ) : (
          <>
            <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border-2 bg-card p-8 shadow-xl ${
                    plan.highlighted ? "border-primary" : "border-border"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>

                  <p className="mt-3 text-muted-foreground">{plan.description}</p>

                  <div className="my-6 border-t border-border" />

                  <ul className="space-y-3 text-left">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="size-5 shrink-0 text-foreground/50" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openWaitlist(plan.name)}
                    className={`mt-8 w-full rounded-lg py-3 text-lg font-semibold transition ${
                      plan.highlighted
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground bg-transparent text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    Join Waitlist
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              14-day money-back guarantee. If you&apos;re not satisfied, you get a full refund — no questions asked.
            </p>
          </>
        )}

        {selectedPlan ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Join Waitlist</p>
                  <h3 className="mt-1 text-2xl font-semibold">
                    Save your spot for {selectedPlan === "waitlist_only" ? "the course launch" : selectedPlan}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="rounded-full border border-border p-2 transition hover:bg-muted"
                  aria-label="Close waitlist modal"
                >
                  <X className="size-4" />
                </button>
              </div>

              <form action={waitlistAction} className="mt-6 space-y-4">
                <input
                  type="hidden"
                  name="source"
                  value={selectedPlan === "waitlist_only" ? "landing_page_waitlist" : `pricing_${selectedPlan.toLowerCase().replace(/\s+/g, "_")}`}
                />
                <div>
                  <label htmlFor="waitlist-modal-email" className="mb-2 block text-sm font-medium">
                    Email address
                  </label>
                  <input
                    id="waitlist-modal-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="waitlist-modal-goal" className="mb-2 block text-sm font-medium">
                    What is your goal for joining this course?
                  </label>
                  <textarea
                    id="waitlist-modal-goal"
                    name="goal"
                    rows={4}
                    placeholder="For example: launch my first app, learn Cursor properly, or build internal tools for work."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  disabled={waitlistPending}
                  className="w-full rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90 disabled:opacity-50"
                >
                  {waitlistPending ? "Joining..." : "Join Waitlist"}
                </button>
              </form>

              {waitlistState.error ? (
                <p className="mt-4 text-sm text-red-500">{waitlistState.error}</p>
              ) : null}
              {waitlistState.success ? (
                <p className="mt-4 text-sm text-emerald-400">{waitlistState.success}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
