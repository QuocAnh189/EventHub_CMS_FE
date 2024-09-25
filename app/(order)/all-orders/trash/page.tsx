//next
import { Metadata } from 'next'

//pages
import AllOrdersTrashPage from '@pages/all-orders.page/all-orders.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Trash Orders',
  description: ''
}

const OrdersTrash: React.FC = () => {
  return <AllOrdersTrashPage />
}

export default OrdersTrash
