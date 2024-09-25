//next
import { Metadata } from 'next'

//pages
import PendingOrdersTrashPage from '@pages/all-pending-orders.page/all-pending-orders.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Trash Orders',
  description: ''
}

const PendingOrdersTrash: React.FC = () => {
  return <PendingOrdersTrashPage />
}

export default PendingOrdersTrash
