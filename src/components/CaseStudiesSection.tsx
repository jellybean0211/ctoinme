import { Briefcase, Rocket, Megaphone, Scale, HardHat } from "lucide-react"

const caseStudies = [
  {
    icon: Briefcase,
    tag: "SME Owner",
    name: "Wei Jian",
    role: "Business Owner",
    before:
      "Overstaffed team doing repetitive work manually. Payroll eating into margins as the company scaled.",
    after:
      "Reduced headcount by 50% with the same productivity output. Half the payroll cost, same results.",
    takeaway: "Keep payroll manageable while you scale your business.",
    borderClassName: "border-blue-500/30 bg-blue-500/5",
  },
  {
    icon: Rocket,
    tag: "Entrepreneur",
    name: "Hafiz",
    role: "Early-Stage Founder",
    before:
      "Needed a learning app but couldn't afford a developer or agency. Stuck at the idea stage with no technical co-founder.",
    after:
      "Learnt to code with AI, built the app himself, and made his first revenue in 3 months — zero upfront development cost.",
    takeaway:
      "Skip hiring developers or agencies. Build it yourself with AI.",
    borderClassName: "border-purple-500/30 bg-purple-500/5",
  },
  {
    icon: Megaphone,
    tag: "Marketing",
    name: "Hana",
    role: "Marketing Associate",
    before:
      "Spent most of her time producing content manually. The team was considering hiring a second person to keep up.",
    after:
      "10x her content output with AI. Now acts as a manager directing AI instead of doing everything herself. Got rewarded with a raise.",
    takeaway:
      "Save the cost of a second hire. Your best people get rewarded more. Win-win.",
    borderClassName: "border-amber-500/30 bg-amber-500/5",
  },
  {
    icon: Scale,
    tag: "Legal",
    name: "Chris & Co.",
    role: "30-Lawyer Firm",
    before:
      "Partners considering hiring more junior lawyers to handle the volume of contract drafting and review.",
    after:
      "Froze hiring after training lawyers to draft and review contracts with AI. More billable hours, less grunt work.",
    takeaway:
      "Time back. More billable hours. No new headcount needed.",
    borderClassName: "border-emerald-500/30 bg-emerald-500/5",
  },
  {
    icon: HardHat,
    tag: "Engineering",
    name: "Syafiq",
    role: "Civil Engineer",
    before:
      "Hours spent on back-of-the-napkin calculations and ground-level analysis before every project decision.",
    after:
      "Uses AI to handle preliminary calculations in minutes. Spends more time on strategy and bird\u2019s-eye project decisions.",
    takeaway:
      "Higher quality projects. Same cost. Just more effective.",
    borderClassName: "border-rose-500/30 bg-rose-500/5",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
            Real Results
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            What Happens After the Workshop
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            These are real people who went through our training. Here&apos;s
            what changed.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.name}
              className={`rounded-xl border bg-card/50 p-6 backdrop-blur ${study.borderClassName}`}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <study.icon className="size-5 text-foreground/60" />
                <span className="rounded-full border border-border/60 px-3 py-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {study.tag}
                </span>
                <span className="text-sm font-semibold">
                  {study.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {study.role}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border/50 bg-background/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400/70">
                    Before
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {study.before}
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-background/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/70">
                    After
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {study.after}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-foreground/80">
                {study.takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
