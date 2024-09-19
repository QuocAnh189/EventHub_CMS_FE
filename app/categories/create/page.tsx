//next
import { Metadata } from 'next'

//pages
import CreateCategoryPage from '@pages/categories.page/category.create.page'

export const metadata: Metadata = {
  title: 'Event Hub | Create Category',
  description: ''
}

const CreateCategory: React.FC = () => {
  return <CreateCategoryPage />
}

export default CreateCategory
