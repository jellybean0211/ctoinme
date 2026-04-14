import Link from "next/link"

export function TopBanner() {
  return (
    <div className="flex w-full min-h-14 items-center justify-center gap-4 bg-foreground px-4 py-2 text-center">
      <p className="text-sm font-medium text-background">
        Your competitors are already upskilling with AI. Don&apos;t get left behind.
      </p>
      <Link
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground transition hover:bg-background/90"
      >
        Book a Free Consultation
      </Link>
    </div>
  )
}
