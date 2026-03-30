import Image from "next/image";

interface Testimonial {
  name: string;
  handle: string;
  avatar: string | null;
  initials?: string;
  text: string;
  type: "twitter" | "community" | "student";
}

const testimonials: Testimonial[] = [
  {
    name: "ChaosInMotion",
    handle: "@AlexanderJimlee",
    avatar: "/images/twitter-avatar-1.jpg",
    text: "Yihui's course is amazing — it's the best money I've spent recently. Such a thoughtful course. Time to study hard and get both my job and side hustle on track!",
    type: "twitter",
  },
  {
    name: "Fox@MkSaaS.com",
    handle: "@indie_maker_fox",
    avatar: "/images/twitter-avatar-2.jpg",
    text: "This is the best hands-on AI coding course on the internet! Among international courses I only respect Antonio, but he can't keep up with current trends like Yihui does! Weekly updates! The output efficiency is insane!",
    type: "twitter",
  },
  {
    name: "Feng言峰语",
    handle: "@xiaofengc1989",
    avatar: "/images/twitter-avatar-3.jpg",
    text: "I wouldn't recommend most AI coding courses out there, except this teacher's. I watched his content on Bilibili — professional and detailed. Impressive.",
    type: "twitter",
  },
  {
    name: "极客杰尼",
    handle: "@seekjourney",
    avatar: null,
    initials: "极客",
    text: "For AI coding courses, go with Yihui. I've watched his videos — very detailed. Highly recommended.",
    type: "twitter",
  },
  {
    name: "海拉鲁编程客",
    handle: "@hylarucoder",
    avatar: "/images/twitter-avatar-5.jpg",
    text: "If you want pure vibe coding, check out @liseami1's course. If you want to become an indie developer, go with @yihui_indie.",
    type: "twitter",
  },
  {
    name: "Justin3go",
    handle: "@Justin1024go",
    avatar: "/images/twitter-avatar-6.jpg",
    text: "Shoutout to @yihui_indie — just check out his regular videos and you'll know if it's the right fit for you.",
    type: "twitter",
  },
  {
    name: "八宝周168",
    handle: "八宝周168",
    avatar: "/images/avatar1.png",
    text: "Such a clear course — instantly became a fan!",
    type: "community",
  },
  {
    name: "今天也有好好生活i",
    handle: "今天也有好好生活i",
    avatar: "/images/avatar2.webp",
    text: "Thanks for the patient teaching! Here's my assignment: I built a Weather + OOTD outfit-of-the-day mini app using Cursor — showing the dev process and feature demo!",
    type: "community",
  },
  {
    name: "剑魂古翼",
    handle: "剑魂古翼",
    avatar: "/images/avatar3.webp",
    text: "Thanks so much! I'm a complete beginner and managed to build the management software I've always wanted to make for my family. Real practical stuff.",
    type: "community",
  },
  {
    name: "金然",
    handle: "Student",
    avatar: "/images/w1.png",
    text: "The best AI coding tutorial out there!",
    type: "student",
  },
  {
    name: "信司",
    handle: "Student",
    avatar: "/images/w2.png",
    text: "The teacher is very responsible — questions in the group chat get answered almost instantly! Really helpful!",
    type: "student",
  },
  {
    name: "蔚琴",
    handle: "Student",
    avatar: "/images/w3.png",
    text: "I was a complete beginner, and through this course I've already built several websites! Thanks Yihui!",
    type: "student",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
            {testimonial.initials}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">{testimonial.name}</span>
            {testimonial.type === "twitter" && (
              <span className="inline-block h-4 w-4 rounded-full bg-green-500" />
            )}
          </div>
          <span className="text-sm text-muted-foreground">
            {testimonial.type === "student" ? "Student" : testimonial.handle}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm">{testimonial.text}</p>
    </div>
  );
}

export function TestimonialsSection() {
  // Distribute testimonials across 3 columns for masonry-like layout
  const columns: [Testimonial[], Testimonial[], Testimonial[]] = [[], [], []];
  testimonials.forEach((t, i) => {
    columns[i % 3].push(t);
  });

  return (
    <section id="testimonials" className="w-full px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">Community & Student Reviews</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Real reviews from students and communities</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Hear what students have to say — real feedback from Twitter, Bilibili, and course communities
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {column.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
