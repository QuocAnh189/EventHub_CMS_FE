//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableOrdersCancel from '@features/datatable/order/TableOrdersCancel'

const AllCancelOrdersPage = () => {
  return (
    <MainLayout>
      <TableOrdersCancel />
    </MainLayout>
  )
}

export default AllCancelOrdersPage
