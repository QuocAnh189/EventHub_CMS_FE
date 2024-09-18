//next
import { Metadata } from 'next'

//pages
import CustomerListPage from '@pages/customer-list.page'

export const metadata: Metadata = {
  title: 'Event Hub | CustomerList',
  description: ''
}

const CustomerList: React.FC = () => {
  return <CustomerListPage />
}

export default CustomerList
