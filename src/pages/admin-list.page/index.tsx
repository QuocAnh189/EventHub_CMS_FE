//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableAdminList from '@features/datatable/admin/TableAdminList'

const AdminListPage = () => {
  return (
    <MainLayout>
      <TableAdminList />
    </MainLayout>
  )
}

export default AdminListPage
