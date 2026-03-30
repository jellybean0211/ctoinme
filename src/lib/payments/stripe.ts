import Stripe from 'stripe'
import { PaymentProvider, CheckoutParams, WebhookResult } from './types'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

function getPriceIds(): Record<'6_month' | '1_year', string> {
  return {
    '6_month': process.env.STRIPE_6_MONTH_PRICE_ID!,
    '1_year': process.env.STRIPE_1_YEAR_PRICE_ID!,
  }
}

function planTypeFromPriceId(priceId: string): '6_month' | '1_year' | undefined {
  const priceIds = getPriceIds()
  if (priceId === priceIds['6_month']) return '6_month'
  if (priceId === priceIds['1_year']) return '1_year'
  return undefined
}

export class StripeProvider implements PaymentProvider {
  async createCheckoutSession(params: CheckoutParams): Promise<{ url: string }> {
    const stripe = getStripe()
    const priceIds = getPriceIds()

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: params.email,
      client_reference_id: params.userId,
      line_items: [
        {
          price: priceIds[params.planType],
          quantity: 1,
        },
      ],
      success_url: params.successUrl,
      cancel_url: params.cancelUrl,
    })

    if (!session.url) {
      throw new Error('Failed to create checkout session')
    }

    return { url: session.url }
  }

  async createPortalSession(customerId: string, returnUrl: string): Promise<{ url: string }> {
    const stripe = getStripe()
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return { url: session.url }
  }

  async handleWebhook(body: string, signature: string): Promise<WebhookResult> {
    const stripe = getStripe()
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
        const item = subscription.items.data[0]
        const priceId = item?.price.id

        return {
          type: 'subscription_created',
          userId: session.client_reference_id ?? undefined,
          subscriptionId: subscription.id,
          customerId: session.customer as string,
          planType: planTypeFromPriceId(priceId),
          status: subscription.status,
          currentPeriodStart: item ? new Date(item.current_period_start * 1000) : undefined,
          currentPeriodEnd: item ? new Date(item.current_period_end * 1000) : undefined,
        }
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const item = subscription.items.data[0]
        const priceId = item?.price.id

        return {
          type: 'subscription_updated',
          subscriptionId: subscription.id,
          customerId: subscription.customer as string,
          planType: planTypeFromPriceId(priceId),
          status: subscription.status,
          currentPeriodStart: item ? new Date(item.current_period_start * 1000) : undefined,
          currentPeriodEnd: item ? new Date(item.current_period_end * 1000) : undefined,
        }
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        return {
          type: 'subscription_deleted',
          subscriptionId: subscription.id,
          customerId: subscription.customer as string,
          status: subscription.status,
        }
      }

      default:
        throw new Error(`Unhandled event type: ${event.type}`)
    }
  }
}
