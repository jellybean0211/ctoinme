import Image from "next/image";

const tools = [
  { src: "/images/cursor.png", alt: "Cursor" },
  { src: "/images/claude.svg", alt: "Claude" },
  { src: "/images/github-copilot.png", alt: "GitHub Copilot" },
  { src: "/images/windsurf.png", alt: "Windsurf" },
  { src: "/images/bolt.svg", alt: "Bolt" },
  { src: "/images/v0.svg", alt: "v0" },
  { src: "/images/replit.svg", alt: "Replit" },
  { src: "/images/lovable.svg", alt: "Lovable" },
];

export function ToolsMarquee() {
  return (
    <section className="pt-16 pb-32 overflow-hidden">
      <h2 className="mb-12 text-center text-2xl font-bold">AI Coding Tools You'll Master</h2>

      <div className="relative">
        <div className="flex w-max animate-marquee items-center gap-16">
          {/* First set */}
          {tools.map((tool) => (
            <Image
              key={`a-${tool.alt}`}
              src={tool.src}
              alt={tool.alt}
              width={120}
              height={48}
              className="h-12 w-auto grayscale opacity-60 transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {tools.map((tool) => (
            <Image
              key={`b-${tool.alt}`}
              src={tool.src}
              alt={tool.alt}
              width={120}
              height={48}
              className="h-12 w-auto grayscale opacity-60 transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>

      {/* Inline style for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
