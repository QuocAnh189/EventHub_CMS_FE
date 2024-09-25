//next
import { Metadata } from 'next'

//pages
import CategoryTrashPage from '@pages/categories.page/category.trash.page'

export const metadata: Metadata = {
  title: 'Event Hub | Category Trash',
  description: ''
}

const CategoriesTrash: React.FC = () => {
  return <CategoryTrashPage />
}

export default CategoriesTrash
