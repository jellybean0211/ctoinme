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
            The Companies That Don&apos;t Train Will Get Left Behind
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            AI isn&apos;t coming — it&apos;s here. Your competitors are already
            using it to cut costs, move faster, and do more with fewer people.
            Every month you wait, the gap widens. The question isn&apos;t whether
            to train your team — it&apos;s whether you can afford not to.
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
            <h3 className="mt-4 text-lg font-semibold">The Cost of Waiting</h3>
            <p className="mt-2 text-justify text-muted-foreground">
              Every week your team spends doing manually what AI can do in
              minutes is money you&apos;re burning. Your competitors aren&apos;t
              waiting. The companies that train now will set the pace — the
              rest will spend the next two years trying to catch up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
