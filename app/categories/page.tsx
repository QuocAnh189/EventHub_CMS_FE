//next
import { Metadata } from 'next'

//pages
import CategoryPage from '@pages/categories.page'

export const metadata: Metadata = {
  title: 'Event Hub | Category',
  description: ''
}

const Category: React.FC = () => {
  return <CategoryPage />
}

export default Category
