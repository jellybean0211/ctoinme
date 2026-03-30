import { Check } from "lucide-react"

const features = [
  "Full course content",
  "50+ hands-on projects",
  "Exclusive WeChat Q&A group",
  "Videos + docs + source code",
  "Member-exclusive templates included",
  "Continuous updates",
  "Q&A group guidance",
  "Student-exclusive community",
]

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
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          Pricing
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          One purchase, start your AI coding journey today
        </p>

        {/* Pricing card */}
        <div className="mx-auto mt-12 max-w-md">
          <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-xl">
            {/* Limited offer badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                Limited Offer
              </span>
            </div>

            <h3 className="text-xl font-bold">AI Coding Masterclass</h3>

            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold">¥599</span>
              <span className="text-lg text-muted-foreground">/year</span>
            </div>

            <p className="mt-3 text-muted-foreground">
              Complete hands-on AI coding course, from zero to mastery
            </p>

            <div className="my-6 border-t border-border" />

            <ul className="space-y-3 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="size-5 shrink-0 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-lg bg-primary py-3 text-lg font-semibold text-white transition hover:bg-primary/90"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
