"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is HRDF and how does it reduce our cost?",
    answer:
      "HRDF (Human Resources Development Fund) is a levy paid by Malaysian employers. Companies that contribute to the levy can claim training costs back. Our workshops are HRDF-certified, which means the majority of the cost is covered — making this one of the most cost-effective ways to upskill your team.",
  },
  {
    question: "How is this different from generic AI training programs?",
    answer:
      "Most AI training programs teach generic prompting tips anyone can find on YouTube. We start by interviewing your employees, identifying their specific bottlenecks, and designing a workshop around those real problems. Your team walks out with workflows they can apply the next day — not abstract knowledge.",
  },
  {
    question: "What size companies do you work with?",
    answer:
      "We work best with medium-sized companies — large enough to have an HRDF levy to utilize, but nimble enough to implement changes quickly. That said, we're open to conversations with companies of any size if the fit is right.",
  },
  {
    question: "Do our employees need technical backgrounds?",
    answer:
      "Not at all. Our workshops are designed for non-technical teams — operations, marketing, sales, finance, HR. We teach practical AI skills that anyone can pick up, regardless of their technical background.",
  },
  {
    question: "What's the ROI on this training?",
    answer:
      "Every workshop is designed with a payback period of under 6 months. We focus exclusively on workflows that directly affect your topline or bottomline — if it doesn't move the needle, it doesn't make it into the training.",
  },
  {
    question: "What if we don't like the proposed workshop?",
    answer:
      "We offer a money-back guarantee on the proposed solution. After we assess your team and present the workshop plan, if you're not satisfied with the approach, you don't pay. We only proceed when you're confident in the value.",
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
          Everything you need to know before booking a consultation
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
