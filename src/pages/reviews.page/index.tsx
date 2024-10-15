//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableReviews from '@features/datatable/review/TableReviews'

const ReviewPage = () => {
  return (
    <MainLayout>
      <TableReviews />
    </MainLayout>
  )
}

export default ReviewPage
