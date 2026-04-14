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
          Your Trainer
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
        <p className="mb-8 text-justify text-muted-foreground">CTO of a software house with 5 engineers. I&apos;ve spent my career turning technology into ROI — and now I train companies to do the same with AI.</p>

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
          I&apos;ve engineered apps that powered millions of users with AI —
          solving actually hard problems, not toy demos. Over 8+ years in
          software engineering, I&apos;ve trained and mentored 30+ professionals
          — software engineers, marketers, civil engineers, accountants — into
          senior roles. I know what it takes to get people from &quot;I
          don&apos;t get AI&quot; to &quot;this just saved me 10 hours a
          week.&quot;
        </p>
        <p className="mt-4 text-justify leading-relaxed text-muted-foreground">
          I built CTO in Me because I kept seeing the same pattern: companies
          spending on AI tools but getting no ROI because their people
          weren&apos;t trained to use them. I teach what I do on a daily basis
          — no textbook theory, just real workflows that move the needle.
        </p>

        {/* Proof */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">8+</p>
            <p className="text-sm text-muted-foreground">Years in software engineering</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">30+</p>
            <p className="text-sm text-muted-foreground">Professionals trained into senior roles</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-2xl font-bold">Millions</p>
            <p className="text-sm text-muted-foreground">Users powered by apps I&apos;ve built</p>
          </div>
        </div>

        {/* Hint at growing team */}
        <p className="mt-6 text-sm text-muted-foreground/70">
          As demand grows, we&apos;re expanding our roster of trainers — all
          practitioners, all engineers who use AI to ship real products every
          day.
        </p>
      </div>
    </section>
  );
}
