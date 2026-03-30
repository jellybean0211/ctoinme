import { PaymentProvider } from './types'
import { StripeProvider } from './stripe'

export function getPaymentProvider(): PaymentProvider {
  return new StripeProvider()
}
