import Link from "next/link"
import { Phone, Users, ClipboardList, Presentation, HeartHandshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Onboarding Call",
    description:
      "We start with a free consultation to understand your company, your goals, and where AI can create the most impact for your bottom line.",
    borderClassName: "border-blue-500/30 bg-blue-500/5",
  },
  {
    number: "02",
    icon: Users,
    title: "Employee Touchpoints",
    description:
      "We speak directly with your employees to identify their daily bottlenecks, pain points, and the workflows that are eating up the most time.",
    borderClassName: "border-purple-500/30 bg-purple-500/5",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Custom Workshop Proposal",
    description:
      "Based on real employee pains — not generic templates — we design a tailored workshop structure. You review and approve before we proceed.",
    borderClassName: "border-amber-500/30 bg-amber-500/5",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Deliver the Workshop",
    description:
      "Hands-on, in-person training with practical exercises your team can apply immediately. No slides-only sessions — your people walk out with real skills.",
    borderClassName: "border-emerald-500/30 bg-emerald-500/5",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Success Follow-Ups",
    description:
      "We don't disappear after the workshop. Scheduled check-ins to measure adoption, answer questions, and ensure the training sticks.",
    borderClassName: "border-rose-500/30 bg-rose-500/5",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="w-full px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="rounded-full bg-muted px-4 py-1 text-sm">
            How It Works
          </span>
          <h2 className="mt-4 mb-4 text-3xl font-bold md:text-4xl">
            A Process Built Around Your People
          </h2>
          <p className="max-w-2xl text-center text-muted-foreground">
            No cookie-cutter training. Every engagement starts with
            understanding your team and ends with measurable results.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex gap-6 rounded-xl border bg-card/50 p-6 backdrop-blur ${step.borderClassName}`}
            >
              <div className="flex shrink-0 flex-col items-center">
                <span className="text-2xl font-bold text-muted-foreground/50">
                  {step.number}
                </span>
                <step.icon className="mt-2 size-6 text-foreground/60" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-justify text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://wa.me/60127760887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Start With a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
