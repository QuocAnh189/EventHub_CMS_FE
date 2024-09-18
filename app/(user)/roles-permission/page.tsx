//next
import { Metadata } from 'next'

//pages
import RolesPermissionPage from '@pages/roles-permission.page'

export const metadata: Metadata = {
  title: 'Event Hub | Roles-Permission',
  description: ''
}

const RolesPermission: React.FC = () => {
  return <RolesPermissionPage />
}

export default RolesPermission
