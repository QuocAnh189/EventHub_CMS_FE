//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableCustomerListTrash from '@features/datatable/customer/TableCustomerListTrash'

const CustomerListTrashPage = () => {
  return (
    <MainLayout>
      <TableCustomerListTrash />
    </MainLayout>
  )
}

export default CustomerListTrashPage
