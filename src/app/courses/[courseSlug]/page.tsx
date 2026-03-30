import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronDown, Play, Lock, CheckCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { getCourseBySlug } from "@/lib/db/courses"
import { getUserProgress } from "@/lib/db/progress"
import { hasActiveSubscription } from "@/lib/db/subscriptions"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress-bar"
import { CategoryAccordion } from "./category-accordion"

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>
}) {
  const { courseSlug } = await params

  let course: any
  try {
    course = await getCourseBySlug(courseSlug)
  } catch {
    notFound()
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const completedLessonIds = user
    ? await getUserProgress(user.id, course.id)
    : []

  const subscribed = user ? await hasActiveSubscription(user.id) : false

  const totalLessons = course.categories.reduce(
    (sum: number, cat: any) => sum + (cat.lessons?.length || 0),
    0
  )
  const progressPercent =
    totalLessons > 0
      ? Math.round((completedLessonIds.length / totalLessons) * 100)
      : 0

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Course Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="mb-4 inline-block text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; Back to courses
          </Link>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            {course.title}
          </h1>
          {course.description && (
            <p className="max-w-2xl text-muted-foreground">
              {course.description}
            </p>
          )}

          {/* Progress */}
          {user && totalLessons > 0 && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Your progress</span>
                <span className="font-medium">
                  {completedLessonIds.length}/{totalLessons} lessons ({progressPercent}%)
                </span>
              </div>
              <ProgressBar value={progressPercent} />
            </div>
          )}
        </div>

        {/* Categories Accordion */}
        <div className="space-y-3">
          {course.categories.map((category: any) => {
            const categoryCompleted = (category.lessons || []).filter(
              (l: any) => completedLessonIds.includes(l.id)
            ).length
            return (
              <CategoryAccordion
                key={category.id}
                title={category.title}
                lessonCount={category.lessons?.length || 0}
                completedCount={categoryCompleted}
              >
                <div className="flex flex-col gap-1 pb-2">
                  {(category.lessons || []).map((lesson: any) => {
                    const isCompleted = completedLessonIds.includes(lesson.id)
                    const isFree = lesson.is_free
                    const isLocked = !isFree && !subscribed
                    const href = `/courses/${courseSlug}/${category.slug}/${lesson.slug}`

                    return (
                      <Link
                        key={lesson.id}
                        href={isLocked ? `/courses/${courseSlug}` : href}
                        className={`group flex items-center justify-between rounded-lg border border-border/50 px-4 py-3 text-sm transition ${
                          isLocked
                            ? "cursor-not-allowed opacity-60"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {isCompleted ? (
                            <CheckCircle className="size-4 shrink-0 text-green-400" />
                          ) : isLocked ? (
                            <Lock className="size-4 shrink-0 text-amber-400" />
                          ) : (
                            <Play className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                          )}
                          <span>{lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {lesson.duration_minutes && (
                            <span className="text-xs text-muted-foreground">
                              {lesson.duration_minutes} min
                            </span>
                          )}
                          {isFree && <Badge variant="free">Free</Badge>}
                          {isCompleted && !isFree && (
                            <Badge variant="completed">Done</Badge>
                          )}
                          {isLocked && <Badge variant="locked">Locked</Badge>}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </CategoryAccordion>
            )
          })}
        </div>

        {/* Pricing CTA */}
        {!subscribed && (
          <div className="mt-12 rounded-xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">
              Unlock All Course Content
            </h3>
            <p className="mx-auto mb-6 max-w-md text-muted-foreground">
              Get full access to every lesson, project, and future update with a subscription.
            </p>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-content transition-colors hover:bg-primary/80"
            >
              View Pricing
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
