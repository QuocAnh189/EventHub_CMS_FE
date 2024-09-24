//next
import { Metadata } from 'next'

//pages
import AdminListTrashPage from '@pages/admin-list.page/admin-list.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | AdminList Trash',
  description: ''
}

const AdminList: React.FC = () => {
  return <AdminListTrashPage />
}

export default AdminList
