import Link from "next/link"

export function TopBanner() {
  return (
    <div className="flex w-full min-h-14 items-center justify-center gap-4 bg-foreground px-4 py-2 text-center">
      <p className="text-sm font-medium text-background">
        HRDF-certified AI training for your team. Tailored. Practical. ROI-driven.
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
