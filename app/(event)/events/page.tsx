//next
import { Metadata } from 'next'

//pages
import EventsPage from '@pages/events.page'

export const metadata: Metadata = {
  title: 'Event Hub | Event',
  description: ''
}

const Events: React.FC = () => {
  return <EventsPage />
}

export default Events
