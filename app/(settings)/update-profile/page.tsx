//next
import { Metadata } from 'next'

//pages
import SettingsPage from '@pages/setting.page'

export const metadata: Metadata = {
  title: 'Event Hub | Update Profile',
  description: ''
}

const UpdateProfile: React.FC = () => {
  return <SettingsPage />
}

export default UpdateProfile
