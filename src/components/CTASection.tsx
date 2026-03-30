import Link from "next/link"
import { WaitlistTrigger } from "@/components/WaitlistTrigger"

export function CTASection({ waitlistOnly }: { waitlistOnly: boolean }) {
  return (
    <section className="relative w-full overflow-hidden bg-foreground px-8 py-20 text-background md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          {waitlistOnly ? "Don't Wait for a Developer. Become the Builder." : "Ready to Build Your First AI Product?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-background/60">
          {waitlistOnly
            ? "The first cohort is limited. Join the waitlist now to lock in early access and the lowest price we'll ever offer."
            : "Go from zero experience to shipping useful products with AI as your execution layer."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {waitlistOnly ? (
            <WaitlistTrigger
              source="cta_waitlist"
              className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 font-semibold text-foreground transition hover:bg-background/90"
            >
              Save My Spot →
            </WaitlistTrigger>
          ) : (
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 font-semibold text-foreground transition hover:bg-background/90"
            >
              Buy Course Now →
            </Link>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-background/40">
          {waitlistOnly
            ? "Free to join. No spam. You'll only hear from us when it matters."
            : "RM499/year, includes all course content and community access. 14-day money-back guarantee."}
        </p>
      </div>
    </section>
  )
}
