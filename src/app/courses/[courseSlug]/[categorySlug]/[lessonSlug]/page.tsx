import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { ChevronLeft, ChevronRight, CheckCircle, Play } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { getLessonBySlug } from "@/lib/db/courses"
import { getUserProgress } from "@/lib/db/progress"
import { hasActiveSubscription } from "@/lib/db/subscriptions"
import { markComplete } from "@/app/actions"
import { YouTubeEmbed } from "@/components/YouTubeEmbed"
import { Button } from "@/components/ui/button"
import { LessonSidebar } from "./lesson-sidebar"

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseSlug: string; categorySlug: string; lessonSlug: string }>
}) {
  const { courseSlug, categorySlug, lessonSlug } = await params

  let data: any
  try {
    data = await getLessonBySlug(courseSlug, categorySlug, lessonSlug)
  } catch {
    notFound()
  }

  const { lesson, course, category, prev, next } = data

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Access check: if lesson is not free and user has no subscription, redirect
  if (!lesson.is_free) {
    const subscribed = user ? await hasActiveSubscription(user.id) : false
    if (!subscribed) {
      redirect(`/courses/${courseSlug}`)
    }
  }

  const completedLessonIds = user
    ? await getUserProgress(user.id, course.id)
    : []

  const isCompleted = completedLessonIds.includes(lesson.id)

  // Extract YouTube video ID from url field
  const videoId = lesson.video_url
    ? extractYouTubeId(lesson.video_url)
    : null

  const markCompleteWithId = markComplete.bind(null, lesson.id)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href={`/courses/${courseSlug}`}
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; {course.title}
          </Link>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            {/* Video */}
            {videoId && (
              <div className="mb-6">
                <YouTubeEmbed videoId={videoId} />
              </div>
            )}

            {/* Lesson Info */}
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              {lesson.title}
            </h1>
            <p className="mb-2 text-sm text-muted-foreground">
              {category.title}
              {lesson.duration_minutes && ` \u00b7 ${lesson.duration_minutes} min`}
            </p>
            {lesson.description && (
              <p className="mb-6 text-muted-foreground">{lesson.description}</p>
            )}

            {/* Mark Complete */}
            {user && (
              <form action={markCompleteWithId} className="mb-8">
                <Button
                  type="submit"
                  variant={isCompleted ? "secondary" : "default"}
                  size="lg"
                  className="gap-2"
                  disabled={isCompleted}
                >
                  <CheckCircle className="size-4" />
                  {isCompleted ? "Completed" : "Mark as Complete"}
                </Button>
              </form>
            )}

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between border-t border-border pt-6">
              {prev ? (
                <Link
                  href={`/courses/${courseSlug}/${prev.categorySlug}/${prev.slug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <ChevronLeft className="size-4" />
                  <div>
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium text-foreground">{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/courses/${courseSlug}/${next.categorySlug}/${next.slug}`}
                  className="flex items-center gap-2 text-right text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium text-foreground">{next.title}</div>
                  </div>
                  <ChevronRight className="size-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <LessonSidebar
            courseSlug={courseSlug}
            category={category}
            currentLessonId={lesson.id}
            completedLessonIds={completedLessonIds}
          />
        </div>
      </div>
    </div>
  )
}

function extractYouTubeId(url: string): string | null {
  if (!url) return null
  // Handle various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  // If it's already just a video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url
  return null
}
