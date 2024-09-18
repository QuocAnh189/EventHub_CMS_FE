//next
import { Metadata } from 'next'

//pages
import EventPage from '@pages/events.page'

export const metadata: Metadata = {
  title: 'Event Hub | Event',
  description: ''
}

const Event: React.FC = () => {
  return <EventPage />
}

export default Event
