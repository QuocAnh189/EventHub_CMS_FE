//next
import { Metadata } from 'next'

//pages
import CreateEventPage from '@pages/events.page/event.create.page'

export const metadata: Metadata = {
  title: 'Event Hub | Create Event',
  description: ''
}

const CreateEvent: React.FC = () => {
  return <CreateEventPage />
}

export default CreateEvent
