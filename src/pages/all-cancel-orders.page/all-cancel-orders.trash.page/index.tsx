//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableTransactionsTrash from '@features/datatable/transaction/TableTransactionsTrash'

const CancelOrdersTrashPage = () => {
  return (
    <MainLayout>
      <TableTransactionsTrash />
    </MainLayout>
  )
}

export default CancelOrdersTrashPage
