//next
import { Metadata } from 'next'

//pages
import CategoryPageTrash from '@pages/categories.page/category.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Category Trash',
  description: ''
}

const Category: React.FC = () => {
  return <CategoryPageTrash />
}

export default Category
