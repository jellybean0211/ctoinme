import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardSidebar } from './sidebar'
import { isAdmin } from '@/lib/db/admin'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const admin = await isAdmin(user.email)

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - hidden on mobile */}
      <DashboardSidebar isAdmin={admin} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">{children}</main>
    </div>
  )
}
