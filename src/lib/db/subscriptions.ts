import { createClient } from '@/lib/supabase/server'

export async function getUserSubscription(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single()

  if (error && error.code !== 'PGRST116') throw error

  return data || null
}

export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('subscriptions')
    .select('id, current_period_end')
    .eq('user_id', userId)
    .eq('status', 'active')
    .gt('current_period_end', new Date().toISOString())
    .single()

  if (error && error.code !== 'PGRST116') throw error

  return !!data
}
