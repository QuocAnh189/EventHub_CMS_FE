//next
import { Metadata } from 'next'

//pages
import CancelOrdersTrashPage from '@pages/all-cancel-orders.page/all-cancel-orders.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Trash Orders',
  description: ''
}

const OrdersCancelTrash: React.FC = () => {
  return <CancelOrdersTrashPage />
}

export default OrdersCancelTrash
