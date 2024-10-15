//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import TableEvents from '@features/datatable/event/TableEvents'

const EventsPage = () => {
  return (
    <MainLayout>
      <TableEvents />
    </MainLayout>
  )
}

export default EventsPage
