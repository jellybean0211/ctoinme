import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getPaymentProvider } from '@/lib/payments'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { planType } = await request.json()

  if (planType !== '6_month' && planType !== '1_year') {
    return NextResponse.json({ error: 'Invalid plan type' }, { status: 400 })
  }

  try {
    const provider = getPaymentProvider()
    const origin = request.headers.get('origin') || ''

    const { url } = await provider.createCheckoutSession({
      userId: user.id,
      email: user.email!,
      planType,
      successUrl: `${origin}/dashboard?checkout=success`,
      cancelUrl: `${origin}/pricing?checkout=canceled`,
    })

    return NextResponse.json({ url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
