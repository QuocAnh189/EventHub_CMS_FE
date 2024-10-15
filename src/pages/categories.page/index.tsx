//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableCategories from '@features/datatable/category/TableCategories'

const CategoriesPage = () => {
  return (
    <MainLayout>
      <TableCategories />
    </MainLayout>
  )
}

export default CategoriesPage
