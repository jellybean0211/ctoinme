import Link from "next/link"
import { WaitlistTrigger } from "@/components/WaitlistTrigger"

export function TopBanner({ waitlistOnly }: { waitlistOnly: boolean }) {
  return (
    <div className="flex w-full min-h-14 items-center justify-center gap-4 bg-foreground px-4 py-2 text-center">
      <p className="text-sm font-medium text-background">
        {waitlistOnly
          ? "Limited spots for the first cohort. Waitlist closes when we're full."
          : "Enrollment is open now for the first cohort!"}
      </p>
      {waitlistOnly ? (
        <WaitlistTrigger
          source="top_banner_waitlist"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground transition hover:bg-background/90"
        >
          Save My Spot
        </WaitlistTrigger>
      ) : (
        <Link
          href="#pricing"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground transition hover:bg-background/90"
        >
          Enroll Now
        </Link>
      )}
    </div>
  )
}
