//next
import { Metadata } from 'next'

//pages
import TicketsTrashPage from '@pages/tickets.page/tickets.trash.page'

export const metadata: Metadata = {
  title: 'Tickets Hub | Tickets Trash',
  description: ''
}

const TicketsTrash: React.FC = () => {
  return <TicketsTrashPage />
}

export default TicketsTrash
