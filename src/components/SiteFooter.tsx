import Link from "next/link";
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
    name: "Website",
    href: "https://prestonojb.com",
    icon: Globe,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/preston-ong-jin-bin/",
    icon: LinkedInIcon,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@preston_ojb",
    icon: null,
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background/95 px-4 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
        {/* Left column */}
        <div className="flex-1">
          <span className="text-lg font-semibold">CTO in Me</span>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Hands-on AI coding education for non-technical people. Learn to build real projects and become indispensable at work.
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1">
          <h3 className="font-semibold">Connect</h3>
          <div className="mt-4 flex flex-col gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-2 transition hover:bg-muted"
              >
                {social.icon ? (
                  <social.icon className="size-5" />
                ) : (
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.773.847c-1.006-3.593-3.397-5.543-6.735-5.494H12.9c-2.684.04-4.59.89-5.835 2.603C5.88 7.216 5.2 9.373 5.175 12c.025 2.627.706 4.784 1.89 6.479 1.246 1.713 3.152 2.563 5.836 2.603h.12c2.328-.04 4.063-.764 5.306-2.213 1.063-1.24 1.7-2.891 1.893-4.907h-7.222v-2.89h10.3l.031.182c.168.99.212 2.017.13 3.051-.198 2.49-1.07 4.66-2.59 6.446C18.948 23.063 16.212 23.98 12.92 24h-.734z" />
                  </svg>
                )}
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mx-auto mt-8 max-w-5xl border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2026 CTO in Me. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
