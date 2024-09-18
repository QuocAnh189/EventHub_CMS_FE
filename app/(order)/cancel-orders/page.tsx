//next
import { Metadata } from 'next'

//pages
import AllCancelOrdersPage from '@pages/all-cancel-orders.page'

export const metadata: Metadata = {
  title: 'Event Hub | All Cancel Orders',
  description: ''
}

const CancelOrders: React.FC = () => {
  return <AllCancelOrdersPage />
}

export default CancelOrders
