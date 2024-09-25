'use client'

//next
import { useParams } from 'next/navigation'

//pages
import EditReviewPage from '@pages/reviews.page/reviews.edit.tsx'

// export const metadata: Metadata = {
//   title: 'Event Hub | Edit Event',
//   description: ''
// }

const EditEvent: React.FC = () => {
  const { id }: any = useParams<any>()
  return <EditReviewPage id={id} />
}

export default EditEvent
