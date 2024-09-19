import { FC } from 'react'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import CategoryForm from '@features/form/category.form'

interface Props {
  id: string | null
}

const EditCategoryPage: FC<Props> = ({ id }) => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Update Category' />
      <CategoryForm id={id} />
    </MainLayout>
  )
}

export default EditCategoryPage
