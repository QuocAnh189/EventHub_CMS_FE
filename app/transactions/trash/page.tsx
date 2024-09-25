//next
import { Metadata } from 'next'

//pages
import TransactionsTrashPage from '@pages/transactions.page/transactions.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Trash Transactions',
  description: ''
}

const TransactionsTrash: React.FC = () => {
  return <TransactionsTrashPage />
}

export default TransactionsTrash
