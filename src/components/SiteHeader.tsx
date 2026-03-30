"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const baseNavLinks = [
  { label: "Home", href: "/" },
  { label: "Student Stories", href: "#testimonials" },
  { label: "Curriculum", href: "#menu" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
];

const loginEnabled = process.env.NEXT_PUBLIC_LOGIN_ENABLED === "true";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const navLinks = loginEnabled && user
    ? [...baseNavLinks, { label: "Dashboard", href: "/dashboard" }]
    : baseNavLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="CTO in You"
            width={32}
            height={32}
            className="rounded-sm"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle (decorative) */}
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="size-4 dark:hidden" />
            <Moon className="hidden size-4 dark:block" />
          </button>

          {/* Auth: Sign In or Avatar */}
          {loginEnabled &&
            (user ? (
              <Link href="/dashboard" className="flex items-center gap-2">
                {user.user_metadata?.avatar_url ? (
                  <Image
                    src={user.user_metadata.avatar_url}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="size-8 rounded-full"
                  />
                ) : (
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                    {(user.email?.[0] ?? "U").toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-content transition hover:bg-primary/90 md:inline-flex"
              >
                Sign In
              </Link>
            ))}

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:text-foreground md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={cn(
          "overflow-hidden border-t border-border/40 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {loginEnabled && !user && (
            <Link
              href="/login"
              className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-content transition hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
