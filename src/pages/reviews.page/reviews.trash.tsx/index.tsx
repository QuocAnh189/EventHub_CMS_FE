//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableReviewsTrash from '@features/datatable/review/TableReviewsTrash'

const ReviewsTrashPage = () => {
  return (
    <MainLayout>
      <TableReviewsTrash />
    </MainLayout>
  )
}

export default ReviewsTrashPage
