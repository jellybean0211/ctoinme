import { GraduationCap, Rocket, Code, Layers, MessageCircle, Star } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Zero Experience Required",
    description: "Never written a line of code? Perfect. You'll go from your first AI prompt to a working, deployed app — step by step.",
  },
  {
    icon: Rocket,
    title: "Build Real Things, Not Demos",
    description: "Every project is something you can actually use or sell: landing pages, internal tools, SaaS apps, and client dashboards.",
  },
  {
    icon: Code,
    title: "The Exact AI Workflow Pros Use",
    description: "Learn to prompt, verify, debug, and ship with VS Code + Claude/Cursor — the same tools used by professional developers.",
  },
  {
    icon: Layers,
    title: "Frontend to Payments, Covered",
    description: "Design, backend, databases, auth, deployment, Stripe — everything you need to launch a product that makes money.",
  },
  {
    icon: MessageCircle,
    title: "Stuck? Get Help in Minutes",
    description: "Direct access to a private WhatsApp group where your questions get answered fast — no waiting days for a forum reply.",
  },
  {
    icon: Star,
    title: "Always Up to Date",
    description: "AI tools change fast. The curriculum updates with them, so what you learn today still works next month.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          Course Features
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Everything You Need to Ship — Nothing You Don&apos;t
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          No filler lectures. No outdated theory. Just the skills, tools, and
          workflows to go from zero to a live product as fast as possible.
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
