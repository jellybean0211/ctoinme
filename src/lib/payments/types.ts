export interface CheckoutParams {
  userId: string
  email: string
  planType: '6_month' | '1_year'
  successUrl: string
  cancelUrl: string
}

export interface WebhookResult {
  type: 'subscription_created' | 'subscription_updated' | 'subscription_deleted'
  userId?: string
  subscriptionId?: string
  customerId?: string
  planType?: '6_month' | '1_year'
  status?: string
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
}

export interface PaymentProvider {
  createCheckoutSession(params: CheckoutParams): Promise<{ url: string }>
  createPortalSession(customerId: string, returnUrl: string): Promise<{ url: string }>
  handleWebhook(body: string, signature: string): Promise<WebhookResult>
}
