import { createClient } from '@/lib/supabase/server'

export async function getCourses() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export async function getCourseBySlug(slug: string) {
  const supabase = await createClient()
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single()

  if (courseError) throw courseError

  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*, lessons(*)')
    .eq('course_id', course.id)
    .order('sort_order', { ascending: true })

  if (catError) throw catError

  // Sort lessons within each category
  const categoriesWithSortedLessons = categories.map((cat: any) => ({
    ...cat,
    lessons: (cat.lessons || []).sort((a: any, b: any) => a.sort_order - b.sort_order),
  }))

  return { ...course, categories: categoriesWithSortedLessons }
}

export async function getLessonBySlug(
  courseSlug: string,
  categorySlug: string,
  lessonSlug: string
) {
  const supabase = await createClient()

  // Get course
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', courseSlug)
    .single()

  if (courseError) throw courseError

  // Get category
  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('*')
    .eq('course_id', course.id)
    .eq('slug', categorySlug)
    .single()

  if (catError) throw catError

  // Get lesson
  const { data: lesson, error: lessonError } = await supabase
    .from('lessons')
    .select('*')
    .eq('category_id', category.id)
    .eq('slug', lessonSlug)
    .single()

  if (lessonError) throw lessonError

  // Get all lessons in this course ordered for prev/next navigation
  const { data: allCategories } = await supabase
    .from('categories')
    .select('id, slug, title, sort_order, lessons(id, slug, title, sort_order)')
    .eq('course_id', course.id)
    .order('sort_order', { ascending: true })

  const allLessons = (allCategories || [])
    .sort((a: any, b: any) => a.sort_order - b.sort_order)
    .flatMap((cat: any) =>
      (cat.lessons || [])
        .sort((a: any, b: any) => a.sort_order - b.sort_order)
        .map((l: any) => ({
          id: l.id,
          slug: l.slug,
          title: l.title,
          categorySlug: cat.slug,
        }))
    )

  const currentIndex = allLessons.findIndex((l: any) => l.id === lesson.id)
  const prev = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const next = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  return {
    lesson,
    course,
    category,
    prev,
    next,
  }
}
