//next
import { Metadata } from 'next'

//pages
import ProfilePage from '@pages/profile.page'

export const metadata: Metadata = {
  title: 'Event Hub | Profile',
  description: ''
}

const Profile: React.FC = () => {
  return <ProfilePage />
}

export default Profile
