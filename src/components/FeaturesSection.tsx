import { GraduationCap, Rocket, Code, Layers, MessageCircle, Star } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Beginner-Friendly",
    description: "Designed for coding newcomers, starting from the most fundamental concepts and progressing step by step into AI-assisted development.",
  },
  {
    icon: Rocket,
    title: "Project-Driven Learning",
    description: "Learn through dozens of real-world project examples, including websites, mini-apps, browser extensions, and mobile apps.",
  },
  {
    icon: Code,
    title: "Cursor + Claude",
    description: "In-depth coverage of using Cursor editor and Claude AI together to boost your development efficiency.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Covers frontend, backend, mobile, browser extensions, and more across multiple development domains.",
  },
  {
    icon: MessageCircle,
    title: "Whatsapp Q&A Group",
    description: "I personally answer questions in the Whatsapp group to help you solve any issues you encounter while learning.",
  },
  {
    icon: Star,
    title: "Continuously Updated",
    description: "Course content is continuously updated to keep up with the latest AI technology trends and tools.",
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
          Comprehensive AI Coding Learning System
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          A complete learning path from tool setup to hands-on projects, designed so even complete beginners can get started quickly
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
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
