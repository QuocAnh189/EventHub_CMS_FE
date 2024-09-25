//next
import { Metadata } from 'next'

//pages
import PendingOrdersPage from '@pages/all-pending-orders.page'

export const metadata: Metadata = {
  title: 'Event Hub | Pending Order',
  description: ''
}

const PendingOrders: React.FC = () => {
  return <PendingOrdersPage />
}

export default PendingOrders
