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
      "You'll be able to independently develop a variety of AI-powered applications, including websites, mobile apps and workflows. These skills can be directly applied to your work and personal projects, and you can even take on freelance projects.",
  },
  {
    question: "Does the course cover the latest AI technologies?",
    answer:
      "Absolutely! We continuously update the course content to cover the latest AI tools and technologies, including the newest model API integrations, the latest version of Cursor, and more.",
  },
  // {
  //   question: "How do I start learning after purchasing?",
  //   answer:
  //     "After purchasing, you can join the exclusive Whatsapp group and get access to course documents, video tutorials, and source code. Follow the course outline starting from the basics, and ask questions in the group whenever you need help.",
  // },
  // {
  //   question: "How do I join the Q&A group after purchasing?",
  //   answer:
  //     "You will receive an email shortly after your purchase with instructions.",
  // },
  // {
  //   question: "What if I'm not satisfied? Can I get a refund?",
  //   answer:
  //     "Yes. You have a full 14-day money-back guarantee. If the course isn't what you expected, just reach out and you'll get a full refund — no questions asked.",
  // },
  {
    question: "What exactly do I get when I purchase?",
    answer:
      "You get: step-by-step video modules covering every project, complete source code and project templates you can use immediately, access to a private community group where I personally answer questions, and continuous updates as new AI tools and techniques emerge.",
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
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
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
