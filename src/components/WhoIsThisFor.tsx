import { Target, Zap } from "lucide-react"

const audienceRoles = [
  "Founders",
  "Marketers",
  "Sales",
  "Product Managers",
  "Business Analysts",
  "Financial Analysts",
  "Consultants",
]

const audienceTrack = [...audienceRoles, ...audienceRoles, ...audienceRoles]

export function WhoIsThisFor() {
  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
            Who Is This For
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            You Have the Ideas. Now Build Them Yourself.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-justify text-muted-foreground">
            Tired of waiting weeks for a developer to build something you could
            describe in 5 minutes? This course gives you the skill to go from idea
            to working app — without a CS degree, a technical co-founder, or a
            RM10k freelancer budget.
          </p>
        </div>
      </div>

      <div className="mt-6 w-screen max-w-none overflow-hidden relative left-1/2 -translate-x-1/2 px-4">
        <div className="flex w-max items-center gap-3 whitespace-nowrap will-change-transform animate-audience-roller">
          {audienceTrack.map((role, index) => (
            <span
              key={`${role}-${index}`}
              className="shrink-0 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground/80"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <Target className="size-8 text-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">What You&apos;ll Ship</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Internal tools that save your team hours every week</li>
              <li>Lead-gen apps, client dashboards, or workflow tools you can charge for</li>
              <li>Your own SaaS or product — launched, live, collecting users</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Zap className="size-8 text-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">Why Now</h3>
            <p className="mt-2 text-justify text-muted-foreground">
              AI just made software development 10x more accessible. The people
              who learn this workflow now will have an unfair advantage over
              everyone still waiting on developers or paying agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
