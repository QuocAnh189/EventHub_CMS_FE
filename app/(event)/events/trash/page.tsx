//next
import { Metadata } from 'next'

//pages
import EventsTrashPage from '@pages/events.page/event.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Event Trash',
  description: ''
}

const EventsTrash: React.FC = () => {
  return <EventsTrashPage />
}

export default EventsTrash
