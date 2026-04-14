import Link from "next/link";
import { Check } from "lucide-react";

const included = [
  "Free onboarding consultation",
  "Employee touchpoints and bottleneck analysis",
  "Custom workshop proposal tailored to your team",
  "In-person, hands-on training sessions",
  "Post-workshop follow-up check-ins",
  "HRDF claimable — majority of cost covered",
  "Money-back guarantee on proposed solution",
];

export function PricingSection() {
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
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          Get Started
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Every Engagement Is Custom
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Because no two companies have the same problems, we don&apos;t
          believe in one-size-fits-all pricing. Book a free consultation and
          we&apos;ll scope the right program for your team.
        </p>

        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-border bg-card p-6 text-left shadow-xl md:p-8">
          <h3 className="text-xl font-bold">What&apos;s Included</h3>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="size-5 shrink-0 text-foreground/50" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="mt-8 flex w-full items-center justify-center rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90"
          >
            Book a Free Consultation
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No commitment required. We&apos;ll discuss your goals, assess fit,
          and only proceed if it makes sense for both sides.
        </p>
      </div>
    </section>
  );
}
