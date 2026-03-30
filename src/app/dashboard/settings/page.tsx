import { createClient } from '@/lib/supabase/server'
import { getUserSubscription } from '@/lib/db/subscriptions'
import { SignOutButton } from './sign-out-button'

export default async function SettingsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const subscription = await getUserSubscription(user!.id)

  const avatarUrl =
    user!.user_metadata?.avatar_url || user!.user_metadata?.picture || null
  const fullName =
    user!.user_metadata?.full_name || user!.user_metadata?.name || 'User'
  const email = user!.email || ''

  return (
    <div className="mx-auto max-w-2xl pt-14 md:pt-0">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Settings</h1>

      {/* Profile section */}
      <section className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur">
        <h2 className="mb-4 text-lg font-semibold">Profile</h2>
        <div className="flex items-center gap-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={fullName}
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-lg font-bold text-muted-foreground">
              {fullName.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-semibold">{fullName}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
      </section>

      {/* Subscription section */}
      <section className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur">
        <h2 className="mb-4 text-lg font-semibold">Subscription</h2>
        {subscription ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-medium text-green-400 border border-green-500/30">
                Active
              </span>
              {subscription.plan_type && (
                <span className="text-sm text-muted-foreground capitalize">
                  {subscription.plan_type} plan
                </span>
              )}
            </div>
            {subscription.current_period_end && (
              <p className="text-sm text-muted-foreground">
                Renews on{' '}
                {new Date(subscription.current_period_end).toLocaleDateString(
                  'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </p>
            )}
            <a
              href="/api/portal"
              className="inline-flex items-center rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              Manage Subscription
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              You don&apos;t have an active subscription.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View Plans
            </a>
          </div>
        )}
      </section>

      {/* Sign out */}
      <section className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur">
        <h2 className="mb-4 text-lg font-semibold">Account</h2>
        <SignOutButton />
      </section>
    </div>
  )
}
