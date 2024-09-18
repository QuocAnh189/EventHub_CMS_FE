//next
import { Metadata } from 'next'

//pages
import LoginPage from '@pages/login.page'

export const metadata: Metadata = {
  title: 'Event Hub | Login',
  description: ''
}

const Login: React.FC = () => {
  return <LoginPage />
}

export default Login
