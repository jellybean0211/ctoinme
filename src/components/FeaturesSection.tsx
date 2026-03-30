import { GraduationCap, Rocket, Code, Layers, MessageCircle, Star } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Beginner-Friendly",
    description: "Structured for complete beginners, with a clear path from first prompt to first working product.",
  },
  {
    icon: Rocket,
    title: "Project-Driven Learning",
    description: "Learn by building real assets: landing pages, internal tools, mini apps, and monetizable products.",
  },
  {
    icon: Code,
    title: "VS Code + Claude Workflows",
    description: "Use modern AI coding workflows in a practical way, not as a demo. You will learn how to prompt, verify, debug, and ship.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Covers frontend, backend, databases, deployment, payments, and the AI workflow that ties them together.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Q&A Group",
    description: "Get direct support when you are stuck so you keep shipping instead of losing momentum.",
  },
  {
    icon: Star,
    title: "Continuously Updated",
    description: "The material evolves with the tooling, so you are learning workflows that stay relevant as the AI stack changes.",
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
          A Practical System for Shipping with AI
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A complete path from setup to launch, designed so a complete beginner can
          build something useful fast and keep improving from there.
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
