import { FC } from 'react'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import ReviewForm from '@features/form/review.form'

interface Props {
  id: string | null
}

const EditReviewPage: FC<Props> = ({ id }) => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Update Review' />
      <ReviewForm id={id} />
    </MainLayout>
  )
}

export default EditReviewPage
