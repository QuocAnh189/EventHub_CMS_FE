//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableTicketsTrash from '@features/datatable/ticket/TableTicketsTrash'

const TicketsTrashPage = () => {
  return (
    <MainLayout>
      <TableTicketsTrash />
    </MainLayout>
  )
}

export default TicketsTrashPage
