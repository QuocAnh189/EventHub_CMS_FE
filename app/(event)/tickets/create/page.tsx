//next
import { Metadata } from 'next'

//pages
import CreateTicketPage from '@pages/tickets.page/tickets.create.page'

export const metadata: Metadata = {
  title: 'Event Hub | Create Tickets',
  description: ''
}

const CreateReview: React.FC = () => {
  return <CreateTicketPage />
}

export default CreateReview
