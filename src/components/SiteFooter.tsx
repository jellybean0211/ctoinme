import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "X", icon: "tuite.svg" },
  { name: "YouTube", icon: "youtube.svg" },
  { name: "Bilibili", icon: "bilibili.svg" },
  { name: "Xiaohongshu", icon: "xiaohongshu.svg" },
  { name: "Weibo", icon: "weibo.svg" },
  { name: "Douyin", icon: "douyin.svg" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background/95 px-4 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
        {/* Left column */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              AI
            </div>
            <span className="text-lg font-semibold">AI Coding Masterclass</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Focused on hands-on AI coding education, helping beginners quickly master AI-assisted development skills and turn ideas into reality.
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1">
          <h3 className="font-semibold">Follow Me on Social Media</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-2 transition hover:bg-muted"
              >
                <Image
                  src={`/images/${social.icon}`}
                  alt={social.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mx-auto mt-8 max-w-5xl border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2026 Yihui AI Coding. All rights reserved.</p>
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
