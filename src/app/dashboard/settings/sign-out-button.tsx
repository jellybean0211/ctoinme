'use client'

import { signOut } from '@/app/actions'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="inline-flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/20"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  )
}
