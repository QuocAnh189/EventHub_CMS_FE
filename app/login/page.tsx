import { Metadata } from 'next'

import LoginPage from '@pages/login.page'

export const metadata: Metadata = {
  title: 'Event Hub | Login',
  description: ''
}

const SignUp: React.FC = () => {
  return <LoginPage />
}

export default SignUp
