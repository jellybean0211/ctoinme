import { Wrench, BadgeCheck, Users, Crosshair, ShieldCheck, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Engineers First, Trainers Second",
    description: "We don't just teach AI — we use it to ship products every single day. Your team learns from practitioners, not academics.",
  },
  {
    icon: BadgeCheck,
    title: "HRDF Certified",
    description: "Our training is claimable under your HRDF levy. The majority of the cost is covered — making this a no-brainer investment.",
  },
  {
    icon: Users,
    title: "30+ Engineers Trained Into Leaders",
    description: "We've mentored and trained over 30 software engineers into senior leadership roles. We know how to make training stick.",
  },
  {
    icon: Crosshair,
    title: "Tailor-Made for Your Organization",
    description: "No generic AI workshops. We study your team's actual bottlenecks and build a program around them. Money-back guarantee if you don't like the solution proposed.",
  },
  {
    icon: TrendingUp,
    title: "Business Focused",
    description: "We only coach things that directly affect your topline or bottomline. If it doesn't move the needle, it doesn't make it into the workshop.",
  },
  {
    icon: ShieldCheck,
    title: "Payback in Under 6 Months",
    description: "Every workshop is designed with ROI in mind. Your team should recoup the training investment through productivity gains within 6 months.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          Why Us
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Not Your Typical AI Training
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          We&apos;re not consultants who read a whitepaper and made a slide
          deck. We build with AI every day — and we train your team to do the
          same.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-justify text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
