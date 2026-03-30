import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary to-primary/80 px-8 py-20 text-white md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Start Your AI Coding Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Join 1,400+ students in the hands-on AI coding course. Go from zero experience to independent developer, with AI as your coding assistant!
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-primary transition hover:bg-white/90"
          >
            Buy Course Now →
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-white transition hover:bg-white/10"
          >
            Free Course Preview
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/60">
          ¥599/year, includes all course content. WeChat Q&A group included for anytime learning support.
        </p>
      </div>
    </section>
  )
}
