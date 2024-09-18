//next
import { Metadata } from 'next'

//pages
import ManageUserPage from '@pages/manage-user.page'

export const metadata: Metadata = {
  title: 'Event Hub | ManageUser',
  description: ''
}

const ManageUser: React.FC = () => {
  return <ManageUserPage />
}

export default ManageUser
