'use client'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import ReviewForm from '@features/form/review.form'

const CreateReviewPage = () => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Create Review' />
      <ReviewForm id={null} />
    </MainLayout>
  )
}

export default CreateReviewPage
