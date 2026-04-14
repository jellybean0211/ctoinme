"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#features" },
  { label: "About", href: "#author" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-[0.2em] text-foreground uppercase"
        >
          cto in me
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
          <Link
            href="#contact"
            className="hidden rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-content transition hover:bg-primary/90 md:inline-flex"
          >
            Book a Consultation
          </Link>

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
          <Link
            href="#contact"
            className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-content transition hover:bg-primary/90"
            onClick={() => setMobileOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
