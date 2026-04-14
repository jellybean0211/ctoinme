import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-foreground px-8 py-20 text-background md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Unlock Your Team&apos;s Potential?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-background/60">
          Book a free, no-obligation consultation. We&apos;ll assess your
          team&apos;s needs, discuss how AI can impact your bottom line, and
          only move forward if it&apos;s the right fit.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://wa.me/60127760887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 font-semibold text-foreground transition hover:bg-background/90"
          >
            Book a Free Consultation
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-background/40">
          HRDF certified. Money-back guarantee. No generic advice.
        </p>
      </div>
    </section>
  )
}
