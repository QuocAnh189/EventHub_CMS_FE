//next
import { Metadata } from 'next'

//pages
import CustomerTrashPage from '@pages/customer-list.page/customer-list.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | CustomerList-Trash',
  description: ''
}

const CustomerListTrash: React.FC = () => {
  return <CustomerTrashPage />
}

export default CustomerListTrash
