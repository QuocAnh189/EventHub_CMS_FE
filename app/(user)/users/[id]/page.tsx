//next
import { Metadata } from 'next'

//pages
import EditUserPage from '@pages/manage-user.page/user.edit.page'

export const metadata: Metadata = {
  title: 'Event Hub | User Edit',
  description: ''
}

const EditUser: React.FC = () => {
  return <EditUserPage />
}

export default EditUser
