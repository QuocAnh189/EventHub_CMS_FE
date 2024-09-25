//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableOrdersPendingTrash from './ui/TableOrdersPendingTrash'

const PendingOrdersTrashPage = () => {
  return (
    <MainLayout>
      <TableOrdersPendingTrash />
    </MainLayout>
  )
}

export default PendingOrdersTrashPage
