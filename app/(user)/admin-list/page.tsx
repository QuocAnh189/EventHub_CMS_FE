//next
import { Metadata } from 'next'

//pages
import AdminListPage from '@pages/admin-list.page'

export const metadata: Metadata = {
  title: 'Event Hub | AdminList',
  description: ''
}

const AdminList: React.FC = () => {
  return <AdminListPage />
}

export default AdminList
