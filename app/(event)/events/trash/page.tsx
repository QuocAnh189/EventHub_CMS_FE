//next
import { Metadata } from 'next'

//pages
import EventPageTrash from '@pages/events.page/event.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Event Trash',
  description: ''
}

const Event: React.FC = () => {
  return <EventPageTrash />
}

export default Event
