"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function CategoryAccordion({
  title,
  lessonCount,
  completedCount,
  children,
}: {
  title: string
  lessonCount: number
  completedCount: number
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium transition hover:text-primary"
      >
        <span>{title}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            {completedCount}/{lessonCount}
          </span>
          <ChevronDown
            className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-3">{children}</div>
      </div>
    </div>
  )
}
