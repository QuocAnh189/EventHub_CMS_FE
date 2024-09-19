'use client'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import CategoryForm from '@features/form/category.form'

const CreateCategoryPage = () => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Create Category' />
      <CategoryForm id={null} />
    </MainLayout>
  )
}

export default CreateCategoryPage
