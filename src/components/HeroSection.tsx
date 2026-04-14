import Link from "next/link";
import { CircleCheck } from "lucide-react";

export function HeroSection() {
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
          Unlock 10x Value From Your Team With AI
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-muted-foreground">
          HRDF-Certified Corporate Training
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
          Your employees use AI every day — but are they using it to move the
          needle? We deliver tailored, in-person workshops that teach your team
          how to solve real business problems with AI. Engineered for ROI, not
          theory.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            HRDF claimable
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            Tailored to your organization
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-foreground/50" />
            ROI in under 6 months
          </span>
        </div>

        {/* Guarantee */}
        <p className="mt-4 text-center text-xs text-muted-foreground/70">
          Money-back guarantee if you don&apos;t like the solution proposed. No
          generic advice — only what moves your bottom line.
        </p>
      </div>
    </section>
  );
}
