//next
import { Metadata } from 'next'

//pages
import PaymentPage from '@pages/payments.page'

export const metadata: Metadata = {
  title: 'Event Hub | Payment',
  description: ''
}

const Payment: React.FC = () => {
  return <PaymentPage />
}

export default Payment
