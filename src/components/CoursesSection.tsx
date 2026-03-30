import { ExternalLink } from "lucide-react";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

interface TierCard {
  title: string;
  subtitle: string;
  count: string;
  runtime: string;
  borderClassName: string;
  badgeClassName: string;
  outcome: string;
  content: string[];
}

const tierCards: TierCard[] = [
  {
    title: "Tier 1: Must Have",
    subtitle: "Zero to live app. Start here.",
    count: "50+ videos",
    runtime: "~3.5 hours",
    borderClassName: "border-red-500/30 bg-red-500/5",
    badgeClassName: "border border-red-500/30 bg-red-500/10 text-red-300",
    outcome: "A complete beginner ships a working app with real users and feedback.",
    content: [
      "Intro, strategy, setup, and design fundamentals",
      "Landing page, quiz or form, progress bar, and dynamic results",
      "Debugging basics, Supabase setup, deployment, and launch steps",
    ],
  },
  {
    title: "Tier 2: Should Have",
    subtitle: "Make it professional, polished, and profitable.",
    count: "50+ videos",
    runtime: "~3.25 hours",
    borderClassName: "border-yellow-500/30 bg-yellow-500/5",
    badgeClassName: "border border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    outcome: "Your app feels more trustworthy, complete, and ready for payment.",
    content: [
      "Mindset, reusable prompts, reference-based design, and verification habits",
      "Auth, dashboards, protected pages, forms, email, SEO, and privacy",
      "Stripe, monetization models, pricing pages, paywalls, and launch checklists",
    ],
  },
  {
    title: "Tier 3: Good To Have",
    subtitle: "Polish, optimization, and advanced techniques.",
    count: "50+ videos",
    runtime: "~2.5 hours",
    borderClassName: "border-emerald-500/30 bg-emerald-500/5",
    badgeClassName: "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    outcome: "You sharpen the product without blocking the beginner path to shipping.",
    content: [
      "Mobile-first improvements, animations, image optimization, and social previews",
      "Uploads, webhooks, welcome emails, analytics, and performance fixes",
      "Second-app lessons, monetization experiments, and optimization tactics",
    ],
  },
];

export function CoursesSection() {
  return (
    <section id="menu" className="w-full px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-muted px-4 py-1 text-sm">
              Course Structure
            </span>
            <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
              Subject to change
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            From &quot;I&apos;ve Never Coded&quot; to &quot;I Just Shipped My App&quot;
          </h2>
          <p className="max-w-2xl text-center text-muted-foreground">
            150+ lessons organized into 3 tiers. You ship first, polish second,
            monetize third. Every lesson is under 15 minutes and tied to a real
            outcome — not theory.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 text-center md:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold">150+</p>
            <p className="text-sm text-muted-foreground">Videos total</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Max 15 min</p>
            <p className="text-sm text-muted-foreground">Per lesson</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">3</p>
            <p className="text-sm text-muted-foreground">Tiered learning system</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Beginner</p>
            <p className="text-sm text-muted-foreground">To launched product</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tierCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl border bg-card/50 p-6 backdrop-blur ${card.borderClassName}`}
            >
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${card.badgeClassName}`}
                  >
                    {card.count}
                  </span>
                </div>
                <p className="mt-1 text-justify text-sm text-muted-foreground">{card.subtitle}</p>
              </div>

              <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  Outcome
                </p>
                <p className="mt-2 text-justify text-sm font-medium">{card.outcome}</p>
              </div>

              <div className="mt-4 rounded-xl border border-border/50 bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {card.content.map((item) => (
                    <li key={item} className="rounded-lg border border-border/40 bg-background/50 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WaitlistTrigger
            source="courses_waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Get Early Access to the Full Curriculum
          </WaitlistTrigger>
        </div>
      </div>
    </section>
  );
}
