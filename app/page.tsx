//next
import { Metadata } from 'next'

//page
import HomePage from '@pages/home.page'

export const metadata: Metadata = {
  title: 'Event Hub | Home',
  description: ''
}

const SignUp: React.FC = () => {
  return <HomePage />
}

export default SignUp
