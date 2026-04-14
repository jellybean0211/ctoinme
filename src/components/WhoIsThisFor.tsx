import { Target, Zap } from "lucide-react"

const audienceRoles = [
  "Operations Teams",
  "Marketing Teams",
  "Sales Teams",
  "Finance Teams",
  "HR Departments",
  "Product Teams",
  "Customer Support",
  "Engineering Teams",
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
            For Companies Ready to Work Smarter With AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Your competitors are already using AI to cut costs and move faster.
            The gap between companies that train their people on AI and those
            that don&apos;t will only widen. We help medium-sized companies close
            that gap — fast.
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
            <h3 className="mt-4 text-lg font-semibold">What Your Team Will Gain</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Practical AI workflows that save hours every week</li>
              <li>Confidence to use AI tools for real business decisions</li>
              <li>A shared language and framework for AI adoption across departments</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Zap className="size-8 text-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">Why Now</h3>
            <p className="mt-2 text-justify text-muted-foreground">
              AI is evolving fast. Companies that invest in upskilling their
              teams today will outpace those still figuring it out next year.
              The ROI on training your people now compounds — every month you
              wait is productivity left on the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
