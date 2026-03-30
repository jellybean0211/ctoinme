import Link from "next/link"
import { CheckCircle, Play } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export async function LessonSidebar({
  courseSlug,
  category,
  currentLessonId,
  completedLessonIds,
}: {
  courseSlug: string
  category: any
  currentLessonId: string
  completedLessonIds: string[]
}) {
  // Fetch lessons in this category
  const supabase = await createClient()
  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, title, slug, sort_order, duration_minutes")
    .eq("category_id", category.id)
    .order("sort_order", { ascending: true })

  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-8 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          {category.title}
        </h3>
        <div className="flex flex-col gap-1">
          {(lessons || []).map((l: any) => {
            const isCurrent = l.id === currentLessonId
            const isCompleted = completedLessonIds.includes(l.id)
            return (
              <Link
                key={l.id}
                href={`/courses/${courseSlug}/${category.slug}/${l.slug}`}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                  isCurrent
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="size-3.5 shrink-0 text-green-400" />
                ) : (
                  <Play className="size-3.5 shrink-0" />
                )}
                <span className="truncate">{l.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
