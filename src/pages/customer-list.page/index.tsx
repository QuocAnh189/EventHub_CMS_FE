//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableCustomerList from '@features/datatable/customer/TableCustomerList'

const CustomerListPage = () => {
  return (
    <MainLayout>
      <TableCustomerList />
    </MainLayout>
  )
}

export default CustomerListPage
