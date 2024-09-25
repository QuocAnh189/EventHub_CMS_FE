//next
import { Metadata } from 'next'

//pages
import CustomerListTrashPage from '@pages/customer-list.page/customer-list.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | CustomerList-Trash',
  description: ''
}

const CustomerListTrash: React.FC = () => {
  return <CustomerListTrashPage />
}

export default CustomerListTrash
