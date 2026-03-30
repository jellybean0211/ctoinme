'use server'

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'

export type WaitlistState = {
  error: string | null
  success: string | null
}

export async function markComplete(lessonId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  await supabase.from('lesson_progress').upsert({
    user_id: user.id,
    lesson_id: lessonId,
    completed: true,
    completed_at: new Date().toISOString(),
  }, { onConflict: 'user_id,lesson_id' })
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const goal = String(formData.get('goal') || '').trim()
  const source = String(formData.get('source') || 'landing_page').trim()

  if (!email) {
    return { error: 'Please enter your email address.', success: null }
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!isValidEmail) {
    return { error: 'Please enter a valid email address.', success: null }
  }

  const supabase = process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createAdminClient()
    : await createClient()

  const { error } = await supabase
    .from('waitlist_entries')
    .insert({ email, goal: goal || null, source })

  if (error?.code === '23505') {
    return { error: null, success: 'You are already on the waitlist.' }
  }

  if (error?.code === 'PGRST205') {
    console.error('Missing waitlist_entries table in Supabase schema cache', {
      code: error.code,
      message: error.message,
      hint: error.hint,
    })
    return {
      error: 'Waitlist storage is not set up yet. Apply the waitlist database migration and try again.',
      success: null,
    }
  }

  if (error) {
    console.error('Failed to insert waitlist entry', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
      email,
      source,
    })
    return { error: 'Could not save your email right now. Please try again.', success: null }
  }

  return { error: null, success: 'You are on the waitlist. We will notify you first.' }
}
