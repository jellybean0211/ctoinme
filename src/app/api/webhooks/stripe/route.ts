import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  try {
    const provider = getPaymentProvider()
    const result = await provider.handleWebhook(body, signature)
    const supabase = createAdminClient()

    switch (result.type) {
      case 'subscription_created': {
        await supabase.from('subscriptions').upsert({
          user_id: result.userId,
          stripe_subscription_id: result.subscriptionId,
          stripe_customer_id: result.customerId,
          plan_type: result.planType,
          status: result.status,
          current_period_start: result.currentPeriodStart?.toISOString(),
          current_period_end: result.currentPeriodEnd?.toISOString(),
        }, { onConflict: 'user_id' })
        break
      }

      case 'subscription_updated': {
        await supabase.from('subscriptions')
          .update({
            plan_type: result.planType,
            status: result.status,
            current_period_start: result.currentPeriodStart?.toISOString(),
            current_period_end: result.currentPeriodEnd?.toISOString(),
          })
          .eq('stripe_subscription_id', result.subscriptionId)
        break
      }

      case 'subscription_deleted': {
        await supabase.from('subscriptions')
          .update({ status: 'canceled' })
          .eq('stripe_subscription_id', result.subscriptionId)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}
