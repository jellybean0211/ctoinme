import Image from "next/image";
import { Globe } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
    </svg>
  );
}

const socialLinks = [
  {
    platform: "Website",
    url: "https://prestonojb.com",
    icon: Globe,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/preston-ong-jin-bin/",
    icon: LinkedInIcon,
  },
  {
    platform: "Threads",
    url: "https://www.threads.com/@preston_ojb",
    icon: null,
  },
];

export function AuthorSection() {
  return (
    <section id="author" className="w-full py-10 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Hello! I&apos;m Preston.
        </h2>
        <div className="mb-6">
          <Image
            src="/images/dp.jpeg"
            alt="Preston"
            width={120}
            height={120}
            className="h-24 w-24 rounded-2xl object-cover"
            priority
          />
        </div>
        <p className="mb-8 text-justify text-muted-foreground">CTO. Course Creator.</p>

        {/* Social Links */}
        <div className="mb-10 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-muted"
            >
              {link.icon ? (
                <link.icon className="size-4" />
              ) : (
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.773.847c-1.006-3.593-3.397-5.543-6.735-5.494H12.9c-2.684.04-4.59.89-5.835 2.603C5.88 7.216 5.2 9.373 5.175 12c.025 2.627.706 4.784 1.89 6.479 1.246 1.713 3.152 2.563 5.836 2.603h.12c2.328-.04 4.063-.764 5.306-2.213 1.063-1.24 1.7-2.891 1.893-4.907h-7.222v-2.89h10.3l.031.182c.168.99.212 2.017.13 3.051-.198 2.49-1.07 4.66-2.59 6.446C18.948 23.063 16.212 23.98 12.92 24h-.734z" />
                </svg>
              )}
              {link.platform}
            </a>
          ))}
        </div>

        {/* Author Bio */}
        <p className="text-justify leading-relaxed text-muted-foreground">
          I&apos;m a software engineer with experience building profitable apps and shipping fast. I&apos;ve built software products generating recurring revenue, and shipped dozens of apps — many of them built entirely with AI coding tools like Cursor and Claude Code.
        </p>
        <p className="mt-4 text-justify leading-relaxed text-muted-foreground">
          This course exists because I&apos;ve seen firsthand how these tools can transform the way people work — even if they&apos;ve never written a line of code. I&apos;m not teaching theory. I&apos;m teaching the exact workflow I use every day to ship real products.
        </p>

        {/* Proof */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">8+</p>
            <p className="text-sm text-muted-foreground">Years in software engineering</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-sm text-muted-foreground">Profitable apps built over the years</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">20k+</p>
            <p className="text-sm text-muted-foreground">followers across social platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
