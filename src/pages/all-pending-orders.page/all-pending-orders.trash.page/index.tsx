//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableOrdersPendingTrash from '@features/datatable/order/TableOrdersPendingTrash'

const PendingOrdersTrashPage = () => {
  return (
    <MainLayout>
      <TableOrdersPendingTrash />
    </MainLayout>
  )
}

export default PendingOrdersTrashPage
