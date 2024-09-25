//next
import { Metadata } from 'next'

//pages
import CreateReviewPage from '@pages/reviews.page/reviews.create.tsx'

export const metadata: Metadata = {
  title: 'Event Hub | Create Reviews',
  description: ''
}

const CreateReview: React.FC = () => {
  return <CreateReviewPage />
}

export default CreateReview
