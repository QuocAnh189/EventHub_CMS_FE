//next
import { Metadata } from 'next'

//page
import DashboardPage from '@pages/dashboard.page'

export const metadata: Metadata = {
  title: 'Event Hub | Dashboard',
  description: ''
}

const Dashboard: React.FC = () => {
  return <DashboardPage />
}

export default Dashboard
