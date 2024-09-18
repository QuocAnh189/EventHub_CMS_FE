//next
import { Metadata } from 'next'

//pages
import ReviewPage from '@pages/reviews.page'

export const metadata: Metadata = {
  title: 'Event Hub | Review',
  description: ''
}

const Review: React.FC = () => {
  return <ReviewPage />
}

export default Review
