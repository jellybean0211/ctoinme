"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "I have zero coding experience. Can I still learn?",
    answer:
      "Absolutely! Our course is designed specifically for beginners with no prior experience. We use a project-driven approach so you naturally pick up the necessary skills through practice. Every project comes with detailed video tutorials and source code.",
  },
  {
    question: "What will I be able to do after completing this course?",
    answer:
      "You'll be able to independently develop a variety of AI-powered applications, including websites, WeChat mini programs, browser extensions, and mobile apps. These skills can be directly applied to your work and personal projects, and you can even take on freelance projects.",
  },
  {
    question: "Why is the course one year instead of lifetime access?",
    answer:
      "1. The one-year access period ensures you get maximum value and support, including a full year of Q&A service.\n2. One year is more than enough time to master the core AI coding skills and become capable of developing projects independently.\n3. AI evolves fast — most course content may be outdated after a year, so make the most of this time to learn, ask questions, and start using AI!",
  },
  {
    question: "Does the course cover the latest AI technologies?",
    answer:
      "Absolutely! We continuously update the course content to cover the latest AI tools and technologies, including the newest model API integrations, the latest version of Cursor, and more.",
  },
  {
    question: "How do I start learning after purchasing?",
    answer:
      "After purchasing, you can join the exclusive WeChat Q&A group and get access to course documents, video tutorials, and source code. Follow the course outline starting from the basics, and ask questions in the group whenever you need help.",
  },
  {
    question: "Can I get an invoice?",
    answer:
      "Yes! After purchasing, just contact me with your invoicing details (you can find my contact info on the course homepage). Invoices are typically issued within one business day.",
  },
  {
    question: "How do I join the Q&A group after purchasing?",
    answer:
      "Follow the instructions on the course page to join the Q&A group — it will be visible after purchase. Just scan the QR code to join.",
  },
  {
    question: "Does the teacher personally answer questions?",
    answer:
      "Yes, I personally answer questions in the group. There's also an assistant in the group who can help out during special circumstances (e.g., when I'm traveling) or during events.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Common questions about the course
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border-b border-border">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left font-medium transition hover:text-primary"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
