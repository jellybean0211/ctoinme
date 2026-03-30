import { ExternalLink } from "lucide-react";

interface CourseItem {
  text: string;
  isSubHeader?: boolean;
  isHighlighted?: boolean;
}

interface CourseCard {
  title: string;
  subtitle: string;
  badge?: { text: string; className: string };
  items: CourseItem[];
  cardClassName?: string;
}

const courseCards: CourseCard[] = [
  {
    title: "AI Tools Basics",
    subtitle: "Master the core AI coding tools",
    items: [
      { text: "Cursor Setup & Configuration" },
      { text: "Mastering Cursor: The Essential AI Coding Tool" },
      { text: "Getting Started with Claude Code: Build a Profitable AI Coding Documentation Tool" },
      { text: "How to Create Cursor Rules" },
      { text: "Dev Environment Setup" },
      { text: "Complete Development Environment" },
      { text: "Installing Git" },
      { text: "Installing Node.js" },
      { text: "Installing Python" },
      { text: "Beginner-Friendly! Deploy All Your Services on Zeabur" },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Modern frontend app development",
    items: [
      { text: "Frontend Core Concepts + Best Practices in the AI Era" },
      { text: "AI-Powered Frontend Development: Getting Started with Next.js" },
      { text: "Build a Directory Site with v0 + Supabase + Cursor" },
      { text: "Build an Elon Musk Multilingual Resume Site: Internationalization + Dev Workflow" },
      { text: "Backend Development", isSubHeader: true },
      { text: "Backend services and database beginner guide" },
      { text: "Essential Backend Concepts + Best Practices" },
      { text: "AI-Assisted Backend Intro: Python Basics" },
      { text: "AI-Assisted Backend Intro: Build a Simple API with Flask" },
      { text: "Database Development + SQL Writing Guide for the AI Era" },
      { text: "Going Global with Supabase: A Complete Tutorial" },
    ],
  },
  {
    title: "Payments & Monetization",
    subtitle: "Make your product profitable",
    badge: { text: "$ Highly Recommended", className: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" },
    cardClassName: "border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    items: [
      { text: "Build a Profitable Website: Integrate Personal Payments (No Business License Required)", isHighlighted: true },
      { text: "Complete Creem Payments Guide (Part 1): The Easiest International Payment Method?" },
      { text: "Complete Creem Payments Guide (Part 2): Accept USD Payments from Around the World!" },
      { text: "Full Projects", isSubHeader: true },
      { text: "Complete hands-on projects" },
      { text: "ShipAny: Build a 'China Travel Guide + AI Travel Assistant' SaaS Site in 1 Hour" },
      { text: "Clone Midjourney: Auth + Tongyi Model + Payments + Token Management" },
      { text: "MkSaaS Template: Build an AI Virtual Try-On Product for Global Markets" },
      { text: "iOS App Development: Build an AI Voice Expense Tracker (Based on Qwen Omni)" },
    ],
  },
];

export function CoursesSection() {
  return (
    <section id="menu" className="w-full py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 rounded-full bg-muted px-4 py-1 text-sm">
            Featured Courses
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Curated Course Content</h2>
          <p className="max-w-2xl text-muted-foreground">
            Carefully selected AI coding courses, from tool setup to real-world projects, to help you get started with AI development fast
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courseCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur ${card.cardClassName ?? ""}`}
            >
              {/* Card Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  {card.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${card.badge.className}`}
                    >
                      {card.badge.text}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </div>

              {/* Course Items */}
              <div className="flex flex-col gap-2">
                {card.items.map((item) =>
                  item.isSubHeader ? (
                    <h4
                      key={item.text}
                      className="mt-3 text-sm font-semibold text-muted-foreground"
                    >
                      {item.text}
                    </h4>
                  ) : (
                    <div
                      key={item.text}
                      className={`rounded border border-border/50 bg-muted/50 px-4 py-3 text-sm ${
                        item.isHighlighted ? "text-yellow-500" : ""
                      }`}
                    >
                      {item.text}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            View All Courses
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
