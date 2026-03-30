import Link from "next/link"

export function CTASection({ waitlistOnly }: { waitlistOnly: boolean }) {
  return (
    <section className="relative w-full overflow-hidden bg-foreground px-8 py-20 text-background md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          {waitlistOnly ? "Want First Access When It Launches?" : "Ready to Start Your AI Coding Journey?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-background/60">
          {waitlistOnly
            ? "Join the waitlist and get launch updates as soon as enrollment opens!"
            : "Go from zero experience to building real projects with AI as your CTO."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 font-semibold text-foreground transition hover:bg-background/90"
          >
            {waitlistOnly ? "Join Waitlist →" : "Buy Course Now →"}
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-background/40">
          {waitlistOnly
            ? "No spam. Just launch updates and early access."
            : "RM499/year, includes all course content and community access. 14-day money-back guarantee."}
        </p>
      </div>
    </section>
  )
}
