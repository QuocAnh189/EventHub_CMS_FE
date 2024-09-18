//next
import { Metadata } from 'next'

//pages
import TransactionPage from '@pages/transactions.page'

export const metadata: Metadata = {
  title: 'Event Hub | Transaction',
  description: ''
}

const Transaction: React.FC = () => {
  return <TransactionPage />
}

export default Transaction
