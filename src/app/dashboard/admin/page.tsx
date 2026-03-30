import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { isAdmin, getAdminStats, getAdminUsers } from '@/lib/db/admin'

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || !(await isAdmin(user.email))) {
    redirect('/dashboard')
  }

  const [stats, { users, totalLessons }] = await Promise.all([
    getAdminStats(),
    getAdminUsers(),
  ])

  return (
    <div className="pt-14 md:pt-0">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Admin Panel</h1>

      {/* Stats cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Users" value={stats.totalUsers} />
        <StatCard label="Active Subscriptions" value={stats.activeSubscriptions} />
        <StatCard label="Lessons Completed" value={stats.totalLessonsCompleted} />
      </div>

      {/* Users table */}
      <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur">
        <div className="border-b border-border/50 px-6 py-4">
          <h2 className="text-lg font-semibold">Users ({users.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-xs uppercase text-muted-foreground">
                <th className="px-6 py-3 font-medium">User</th>
                <th className="px-6 py-3 font-medium">Subscription</th>
                <th className="px-6 py-3 font-medium">Progress</th>
                <th className="px-6 py-3 font-medium">Last Sign In</th>
                <th className="px-6 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => {
                const pct =
                  totalLessons > 0
                    ? Math.round((u.completedLessons / totalLessons) * 100)
                    : 0

                return (
                  <tr
                    key={u.id}
                    className="border-b border-border/30 last:border-0"
                  >
                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {u.avatarUrl ? (
                          <img
                            src={u.avatarUrl}
                            alt=""
                            className="h-8 w-8 rounded-full"
                          />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                            {(u.fullName || u.email || '?')[0].toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium">
                            {u.fullName || 'No name'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {u.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Subscription */}
                    <td className="px-6 py-4">
                      {u.subscription ? (
                        <div>
                          <SubscriptionBadge status={u.subscription.status} />
                          <p className="mt-1 text-xs text-muted-foreground">
                            {u.subscription.planType === '1_year'
                              ? '1 Year'
                              : '6 Month'}
                            {u.subscription.status === 'active' &&
                              u.subscription.currentPeriodEnd && (
                                <>
                                  {' '}
                                  &middot; Expires{' '}
                                  {formatDate(u.subscription.currentPeriodEnd)}
                                </>
                              )}
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          No subscription
                        </span>
                      )}
                    </td>

                    {/* Progress */}
                    <td className="px-6 py-4">
                      <div className="w-32">
                        <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {u.completedLessons}/{totalLessons}
                          </span>
                          <span>{pct}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Last Sign In */}
                    <td className="px-6 py-4 text-xs text-muted-foreground">
                      {u.lastSignIn ? formatDate(u.lastSignIn) : 'Never'}
                    </td>

                    {/* Joined */}
                    <td className="px-6 py-4 text-xs text-muted-foreground">
                      {formatDate(u.createdAt)}
                    </td>
                  </tr>
                )
              })}

              {users.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-muted-foreground"
                  >
                    No users yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
    </div>
  )
}

function SubscriptionBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: 'bg-green-500/10 text-green-400 border-green-500/20',
    canceled: 'bg-red-500/10 text-red-400 border-red-500/20',
    past_due: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    inactive: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${styles[status] || styles.inactive}`}
    >
      {status.replace('_', ' ')}
    </span>
  )
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-MY', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
