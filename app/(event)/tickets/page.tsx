//next
import { Metadata } from 'next'

//pages
import TicketPage from '@pages/tickets.page'

export const metadata: Metadata = {
  title: 'Event Hub | Ticket',
  description: ''
}

const Ticket: React.FC = () => {
  return <TicketPage />
}

export default Ticket
