//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableEventsTrash from '@features/datatable/event/EventsTrash'

const EventsTrashPage = () => {
  return (
    <MainLayout>
      <TableEventsTrash />
    </MainLayout>
  )
}

export default EventsTrashPage
