//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableAllOrdersTrash from '@features/datatable/order/TableAllOrdersTrash'

const AllOrdersTrashPage = () => {
  return (
    <MainLayout>
      <TableAllOrdersTrash />
    </MainLayout>
  )
}

export default AllOrdersTrashPage
