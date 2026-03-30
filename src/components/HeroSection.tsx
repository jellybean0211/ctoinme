import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function HeroSection({ waitlistOnly }: { waitlistOnly: boolean }) {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(128,128,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          Ship Your First App in Days, Not Months
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-muted-foreground">
          No Coding Background Needed
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-justify text-lg text-muted-foreground">
          Stop waiting on developers. This course teaches founders, marketers, and
          analysts how to build real, working software using AI — from first prompt
          to live product. 150+ short lessons. No fluff. Just the exact workflow
          used to ship 5+ profitable apps.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {waitlistOnly ? (
            <WaitlistTrigger
              source="hero_waitlist"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Get Early Access →
            </WaitlistTrigger>
          ) : (
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Join The Course →
            </Link>
          )}
          <Link
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Explore The Curriculum
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            150+ bite-sized lessons
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            Zero to launched product
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            Source code + templates included
          </span>
        </div>

        {/* Refund guarantee */}
        <p className="mt-4 text-center text-xs text-muted-foreground/70">
          {waitlistOnly
            ? "Join 0 others on the waitlist. First cohort gets launch pricing — no spam, ever."
            : "Every lesson is under 15 minutes. Full refund within 14 days if it is not the right fit."}
        </p>
      </div>
    </section>
  );
}
