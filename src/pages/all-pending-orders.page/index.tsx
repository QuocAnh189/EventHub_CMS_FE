//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableOrdersPending from './ui/TableOrdersPending'

const PendingOrdersPage = () => {
  return (
    <MainLayout>
      <TableOrdersPending />
    </MainLayout>
  )
}

export default PendingOrdersPage
