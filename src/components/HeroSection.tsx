import Image from "next/image";
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
          Zero to Hero AI Coding Course
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A hands-on course built around Cursor + Claude Code, designed for complete beginners with no coding experience. Learn by building dozens of real projects — websites, mini-apps, browser extensions, mobile apps, and AI agents. Go from zero to shipping your own applications with AI!
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            Start AI Coding →
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Free Preview
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-green-500" />
            2300+ Students
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-green-500" />
            599 CNY/year
          </span>
          <span className="flex items-center gap-1.5">
            <CircleCheck className="size-4 text-green-500" />
            Continuously Updated
          </span>
        </div>

        {/* Promo line */}
        <p className="mt-4 text-sm text-muted-foreground">
          Limited-time offer on Bilibili. Existing students visit:
          <a
            href="https://yihui.flowus.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://yihui.flowus.cn/
          </a>
          {" "}View Course
        </p>
      </div>

      {/* Hero image */}
      <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-border/40 shadow-2xl">
        <Image
          src="/images/hero-video.jpg"
          alt="Course preview"
          width={1920}
          height={1080}
          className="w-full"
          priority
        />
      </div>
    </section>
  );
}
