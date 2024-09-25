//next
import { Metadata } from 'next'

//pages
import ReviewsPage from '@pages/reviews.page'

export const metadata: Metadata = {
  title: 'Event Hub | Review',
  description: ''
}

const Reviews: React.FC = () => {
  return <ReviewsPage />
}

export default Reviews
