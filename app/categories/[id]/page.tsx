//next
import { Metadata } from 'next'

//pages
import EditCategoryPage from '@pages/categories.page/category.edit.page'

export const metadata: Metadata = {
  title: 'Event Hub | Edit Category',
  description: ''
}

const EditCategory: React.FC = () => {
  return <EditCategoryPage />
}

export default EditCategory
