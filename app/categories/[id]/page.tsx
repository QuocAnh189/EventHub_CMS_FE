'use client'

//next
import { useParams } from 'next/navigation'

//pages
import EditCategoryPage from '@pages/categories.page/category.edit.page'

// export const metadata: Metadata = {
//   title: 'Event Hub | Edit Category',
//   description: ''
// }

const EditCategory: React.FC = () => {
  const { id }: any = useParams<any>()

  return <EditCategoryPage id={id} />
}

export default EditCategory
