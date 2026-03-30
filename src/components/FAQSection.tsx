"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "I have zero coding experience. Will I actually be able to build something?",
    answer:
      "Yes — that's exactly who this is for. You won't learn traditional programming. You'll learn how to use AI tools to build real software, step by step. Students with zero background have shipped working apps within the first tier of the course.",
  },
  {
    question: "What can I actually build after this?",
    answer:
      "Real, deployed software: internal tools for your team, lead-generation apps, client dashboards, landing pages, and even SaaS products you can charge money for. Not toy projects — things people use.",
  },
  {
    question: "Is the waitlist free? What do I get by joining?",
    answer:
      "Completely free. Waitlist members get first access when enrollment opens, an exclusive launch discount that won't be available later, and direct updates on the course launch date and curriculum.",
  },
  {
    question: "How is this different from free YouTube tutorials?",
    answer:
      "YouTube gives you fragments. This gives you a complete system: 150+ lessons in order, with source code, templates, and a private community for support. You'll go from zero to a launched product without stitching together random tutorials.",
  },
  {
    question: "Will the course stay up to date as AI tools change?",
    answer:
      "Yes. The curriculum is continuously updated as the tooling evolves. What you learn stays relevant — and your subscription includes all future updates.",
  },
  {
    question: "What exactly do I get when I purchase?",
    answer:
      "150+ video lessons (all under 15 minutes), complete source code for every project, reusable templates, a private WhatsApp Q&A group with direct support, and all future updates. Plus a 14-day money-back guarantee.",
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
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Got Questions?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Everything you need to know before joining the waitlist
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
                  <p className="pb-5 text-justify whitespace-pre-line text-muted-foreground">
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
