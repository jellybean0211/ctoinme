import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getPaymentProvider } from '@/lib/payments'

async function handlePortal(request: NextRequest, redirect: boolean) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    if (redirect) return NextResponse.redirect(new URL('/login', request.url))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .single()

  if (!subscription?.stripe_customer_id) {
    if (redirect) return NextResponse.redirect(new URL('/dashboard/settings', request.url))
    return NextResponse.json({ error: 'No subscription found' }, { status: 404 })
  }

  try {
    const provider = getPaymentProvider()
    const origin = request.headers.get('origin') || new URL(request.url).origin

    const { url } = await provider.createPortalSession(
      subscription.stripe_customer_id,
      `${origin}/dashboard`
    )

    if (redirect) return NextResponse.redirect(url)
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Portal error:', error)
    if (redirect) return NextResponse.redirect(new URL('/dashboard/settings', request.url))
    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return handlePortal(request, true)
}

export async function POST(request: NextRequest) {
  return handlePortal(request, false)
}
