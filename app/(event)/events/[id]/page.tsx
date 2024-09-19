//next
import { Metadata } from 'next'

//pages
import EditEventPage from '@pages/events.page/event.edit.page'

export const metadata: Metadata = {
  title: 'Event Hub | Edit Event',
  description: ''
}

const EditEvent: React.FC = () => {
  return <EditEventPage />
}

export default EditEvent
