'use client'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import TicketForm from '@features/form/ticket.form'

const CreateTicketPage = () => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Create Ticket' />
      <TicketForm id={null} />
    </MainLayout>
  )
}

export default CreateTicketPage
