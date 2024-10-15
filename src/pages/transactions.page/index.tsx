//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableTransactions from '@features/datatable/transaction/TableTransactions'

const TransactionsPage = () => {
  return (
    <MainLayout>
      <TableTransactions />
    </MainLayout>
  )
}

export default TransactionsPage
