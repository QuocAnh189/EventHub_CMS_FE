//next
import { Metadata } from 'next'

//pages
import TicketPage from '@pages/tickets.page'

export const metadata: Metadata = {
  title: 'Event Hub | Ticket',
  description: ''
}

const Tickets: React.FC = () => {
  return <TicketPage />
}

export default Tickets
