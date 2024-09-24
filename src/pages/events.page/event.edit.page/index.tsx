import { FC } from 'react'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import EventForm from '@features/form/event.form'

interface Props {
  id: string | null
}

const EditCategoryPage: FC<Props> = ({ id }) => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Update Event' />
      <EventForm id={id} />
    </MainLayout>
  )
}

export default EditCategoryPage
