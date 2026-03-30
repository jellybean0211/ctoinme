import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getCourses } from '@/lib/db/courses'
import { getUserProgress } from '@/lib/db/progress'
import { getUserSubscription } from '@/lib/db/subscriptions'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const [courses, subscription] = await Promise.all([
    getCourses(),
    getUserSubscription(user!.id),
  ])

  // Fetch progress for each course
  const progressMap: Record<string, string[]> = {}
  await Promise.all(
    courses.map(async (course: any) => {
      progressMap[course.id] = await getUserProgress(user!.id, course.id)
    })
  )

  // Count total lessons per course (from categories query)
  const lessonCountMap: Record<string, number> = {}
  for (const course of courses) {
    const { data: categories } = await supabase
      .from('categories')
      .select('lessons(id)')
      .eq('course_id', course.id)

    lessonCountMap[course.id] = (categories || []).reduce(
      (sum: number, cat: any) => sum + (cat.lessons?.length || 0),
      0
    )
  }

  return (
    <div className="pt-14 md:pt-0">
      {/* Subscription banner */}
      {!subscription && (
        <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 px-6 py-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold">Unlock all lessons</p>
              <p className="text-sm text-muted-foreground">
                Subscribe now to get full access to every course and lesson.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="inline-flex shrink-0 items-center rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Subscribe now
            </Link>
          </div>
        </div>
      )}

      {/* Heading */}
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">My Courses</h1>

      {/* Course grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course: any) => {
          const completed = progressMap[course.id]?.length || 0
          const total = lessonCountMap[course.id] || 0
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0

          return (
            <div
              key={course.id}
              className="flex flex-col rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur"
            >
              <h3 className="mb-1 text-lg font-semibold">{course.title}</h3>
              <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
                {course.description}
              </p>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {completed}/{total} lessons completed
                  </span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              <Link
                href={`/courses/${course.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                {completed > 0 ? 'Continue' : 'Start'}
              </Link>
            </div>
          )
        })}
      </div>

      {courses.length === 0 && (
        <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center">
          <p className="text-muted-foreground">No courses available yet.</p>
        </div>
      )}
    </div>
  )
}
