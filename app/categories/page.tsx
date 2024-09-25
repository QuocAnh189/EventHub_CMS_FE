//next
import { Metadata } from 'next'

//pages
import CategoryPage from '@pages/categories.page'

export const metadata: Metadata = {
  title: 'Event Hub | Category',
  description: ''
}

const Categories: React.FC = () => {
  return <CategoryPage />
}

export default Categories
