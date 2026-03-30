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
            Built for Non-Technical People
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-justify text-muted-foreground">
            You don&apos;t need any coding experience. This course is designed for anyone starting from scratch.
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
            <h3 className="mt-4 text-lg font-semibold">What You&apos;ll Build</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>AI-powered tools & workflows</li>
              <li>A monetizable app (website, mobile app)</li>
              <li>A website showcasing your work/business</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Zap className="size-8 text-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">Why It Matters</h3>
            <p className="mt-2 text-justify text-muted-foreground">
              Bulletproof yourself from getting replaced by people who know AI. The future belongs to those who can leverage AI tools effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
