//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import EventForm from '@features/form/event.form'

const CreateEventPage = () => {
  return (
    <MainLayout>
      <EventForm id={null} />
    </MainLayout>
  )
}

export default CreateEventPage
