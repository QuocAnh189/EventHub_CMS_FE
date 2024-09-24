'use client'

//next
import { useParams } from 'next/navigation'

//pages
import EditEventPage from '@pages/events.page/event.edit.page'

// export const metadata: Metadata = {
//   title: 'Event Hub | Edit Event',
//   description: ''
// }

const EditEvent: React.FC = () => {
  const { id }: any = useParams<any>()
  return <EditEventPage id={id} />
}

export default EditEvent
