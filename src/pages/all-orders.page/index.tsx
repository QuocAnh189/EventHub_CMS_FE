//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableAllOrders from '@features/datatable/order/TableAllOrders'

const AllOrdersPage = () => {
  return (
    <MainLayout>
      <TableAllOrders />
    </MainLayout>
  )
}

export default AllOrdersPage
