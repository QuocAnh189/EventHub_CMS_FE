//next
import { Metadata } from 'next'

//pages
import AllOrdersPage from '@pages/all-orders.page'

export const metadata: Metadata = {
  title: 'Event Hub | All Orders',
  description: ''
}

const Order: React.FC = () => {
  return <AllOrdersPage />
}

export default Order
