//next
import { Metadata } from 'next'

//pages
import TransactionsPage from '@pages/transactions.page'

export const metadata: Metadata = {
  title: 'Event Hub | Transaction',
  description: ''
}

const Transactions: React.FC = () => {
  return <TransactionsPage />
}

export default Transactions
