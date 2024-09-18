//next
import { Metadata } from 'next'

//pages
import AllPendingOrderPage from '@pages/all-pending-orders.page'

export const metadata: Metadata = {
  title: 'Event Hub | All Pending Order',
  description: ''
}

const PendingOrder: React.FC = () => {
  return <AllPendingOrderPage />
}

export default PendingOrder
