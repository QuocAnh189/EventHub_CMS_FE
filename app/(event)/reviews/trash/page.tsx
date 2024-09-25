//next
import { Metadata } from 'next'

//pages
import ReviewsTrashPage from '@pages/reviews.page/reviews.trash.tsx'

export const metadata: Metadata = {
  title: 'Reviews Hub | Reviews Trash',
  description: ''
}

const ReviewsTrash: React.FC = () => {
  return <ReviewsTrashPage />
}

export default ReviewsTrash
