import { Metadata } from 'next'

import HomePage from '@pages/home'

export const metadata: Metadata = {
  title: 'Event Hub | Home',
  description: ''
}

const SignUp: React.FC = () => {
  return <HomePage />
}

export default SignUp
