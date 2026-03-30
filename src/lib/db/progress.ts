import { createClient } from '@/lib/supabase/server'

export async function getUserProgress(userId: string, courseId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_id, lessons!inner(category_id, categories!inner(course_id))')
    .eq('user_id', userId)
    .eq('completed', true)
    .eq('lessons.categories.course_id', courseId)

  if (error) throw error

  return (data || []).map((row: any) => row.lesson_id)
}

export async function markLessonComplete(userId: string, lessonId: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('lesson_progress')
    .upsert(
      {
        user_id: userId,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_id' }
    )

  if (error) throw error
}
