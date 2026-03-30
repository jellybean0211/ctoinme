import Link from "next/link"

export function TopBanner({ waitlistOnly }: { waitlistOnly: boolean }) {
  return (
    <div className="flex w-full min-h-14 items-center justify-center gap-4 bg-foreground px-4 py-2 text-center">
      <p className="text-sm font-medium text-background">
        {waitlistOnly
          ? "Get launch updates and first access when enrollment opens!"
          : "Enrollment is open now for the first cohort!"}
      </p>
      <Link
        href="#pricing"
        className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground transition hover:bg-background/90"
      >
        {waitlistOnly ? "Join Waitlist" : "Enroll Now"}
      </Link>
    </div>
  )
}
