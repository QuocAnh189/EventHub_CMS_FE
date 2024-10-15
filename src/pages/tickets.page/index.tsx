//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableTicket from '@features/datatable/ticket/TableTickets'

const TicketPage = () => {
  return (
    <MainLayout>
      <TableTicket />
    </MainLayout>
  )
}

export default TicketPage
