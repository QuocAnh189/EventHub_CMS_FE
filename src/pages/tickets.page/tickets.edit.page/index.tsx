import { FC } from 'react'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import TicketForm from '@features/form/ticket.form'

interface Props {
  id: string | null
}

const EditTicketPage: FC<Props> = ({ id }) => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Update Ticket' />
      <TicketForm id={id} />
    </MainLayout>
  )
}

export default EditTicketPage
