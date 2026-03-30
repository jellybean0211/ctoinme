import Image from "next/image";

interface SocialStat {
  platform: string;
  count: string;
  icon: string;
}

const socialStats: SocialStat[] = [
  { platform: "X", count: "40K", icon: "/images/tuite.svg" },
  { platform: "YouTube", count: "6K", icon: "/images/youtube.svg" },
  { platform: "Bilibili", count: "48K", icon: "/images/bilibili.svg" },
  { platform: "Xiaohongshu", count: "12K", icon: "/images/xiaohongshu.svg" },
  { platform: "Weibo", count: "100K", icon: "/images/weibo.svg" },
  { platform: "Douyin", count: "60K", icon: "/images/douyin.svg" },
];

export function AuthorSection() {
  return (
    <section id="author" className="w-full py-10 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          <em className="not-italic italic">Hello!</em> I&apos;m Yihui
        </h2>
        <p className="mb-8 text-muted-foreground">Indie Developer &amp; Full-Stack Engineer &amp; AI Content Creator</p>

        {/* Social Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {socialStats.map((stat) => (
            <div key={stat.platform} className="flex items-center gap-3">
              <Image
                src={stat.icon}
                alt={stat.platform}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div>
                <p className="text-sm text-muted-foreground">{stat.platform}</p>
                <p className="text-lg font-bold">{stat.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Followers */}
        <div className="mb-10">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
            260K+
          </span>
          <span className="ml-2 text-lg text-muted-foreground">Total followers across platforms</span>
        </div>

        {/* Author Bio */}
        <div className="flex items-start gap-4">
          <Image
            src="/images/yihui.jpg"
            alt="Yihui"
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <p className="text-muted-foreground leading-relaxed">
            Hi, I&apos;m Yihui, a developer with 10 years of full-stack web development experience. I&apos;m currently a full-time content creator focused on AI-assisted coding. Last year I built NuxtBase, a boilerplate product to help people ship projects faster. But I noticed that many non-programmers, even with powerful AI coding tools like Cursor and Claude Code, still don&apos;t know how to write prompts, lack foundational dev knowledge, and struggle to choose the right tech stack. That&apos;s why I created this course. I want to use my own learning and hands-on experience to help more people take that first step -- even if it&apos;s just trying to build the simplest product. This course is continuously updated, not to turn you into a programmer, but to help you take a small idea and make it real in this incredible era!
          </p>
        </div>
      </div>
    </section>
  );
}
