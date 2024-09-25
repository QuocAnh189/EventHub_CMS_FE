'use client'

//next
import { useParams } from 'next/navigation'

//pages
import EditTicketPage from '@pages/tickets.page/tickets.edit.page'

// export const metadata: Metadata = {
//   title: 'Event Hub | Edit Event',
//   description: ''
// }

const EditEvent: React.FC = () => {
  const { id }: any = useParams<any>()
  return <EditTicketPage id={id} />
}

export default EditEvent
