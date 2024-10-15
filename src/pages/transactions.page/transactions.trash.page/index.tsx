//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableTransactionsTrash from '@features/datatable/transaction/TableTransactionsTrash'

const TransactionsTrashPage = () => {
  return (
    <MainLayout>
      <TableTransactionsTrash />
    </MainLayout>
  )
}

export default TransactionsTrashPage
