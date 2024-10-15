//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableCategoriesTrash from '@features/datatable/category/TableCategoriesTrash'

const CategoriesTrashPage = () => {
  return (
    <MainLayout>
      <TableCategoriesTrash />
    </MainLayout>
  )
}

export default CategoriesTrashPage
