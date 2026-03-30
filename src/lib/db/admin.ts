import { createAdminClient } from '@/lib/supabase/admin'

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim()).filter(Boolean)

export async function isAdmin(email: string | undefined): Promise<boolean> {
  if (!email) return false
  return ADMIN_EMAILS.includes(email)
}

export async function getAdminStats() {
  const supabase = createAdminClient()

  const [
    { count: totalUsers },
    { count: activeSubscriptions },
    { count: totalProgress },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('subscriptions').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('lesson_progress').select('*', { count: 'exact', head: true }).eq('completed', true),
  ])

  return {
    totalUsers: totalUsers || 0,
    activeSubscriptions: activeSubscriptions || 0,
    totalLessonsCompleted: totalProgress || 0,
  }
}

export async function getAdminUsers() {
  const supabase = createAdminClient()

  // Get all profiles
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (profilesError) throw profilesError

  // Get all subscriptions
  const { data: subscriptions, error: subsError } = await supabase
    .from('subscriptions')
    .select('*')

  if (subsError) throw subsError

  // Get lesson progress counts per user
  const { data: progressData, error: progressError } = await supabase
    .from('lesson_progress')
    .select('user_id, lesson_id')
    .eq('completed', true)

  if (progressError) throw progressError

  // Get total lesson count
  const { count: totalLessons } = await supabase
    .from('lessons')
    .select('*', { count: 'exact', head: true })

  // Get auth users for emails
  const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers()
  if (authError) throw authError

  const authMap = new Map(authUsers.map((u) => [u.id, u]))
  const subsMap = new Map(subscriptions.map((s: any) => [s.user_id, s]))

  // Count completed lessons per user
  const progressCount = new Map<string, number>()
  for (const p of progressData || []) {
    progressCount.set(p.user_id, (progressCount.get(p.user_id) || 0) + 1)
  }

  return {
    totalLessons: totalLessons || 0,
    users: (profiles || []).map((profile: any) => {
      const authUser = authMap.get(profile.id)
      const subscription = subsMap.get(profile.id)
      const completedLessons = progressCount.get(profile.id) || 0

      return {
        id: profile.id,
        fullName: profile.full_name,
        avatarUrl: profile.avatar_url,
        email: authUser?.email || null,
        createdAt: profile.created_at,
        lastSignIn: authUser?.last_sign_in_at || null,
        subscription: subscription
          ? {
              planType: subscription.plan_type,
              status: subscription.status,
              currentPeriodEnd: subscription.current_period_end,
            }
          : null,
        completedLessons,
      }
    }),
  }
}
