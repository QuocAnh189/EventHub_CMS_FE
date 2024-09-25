'use client'

//next
import { useParams } from 'next/navigation'
// import { Metadata } from 'next'

//pages
import EditUserPage from '@pages/manage-user.page/user.edit.page'

// export const metadata: Metadata = {
//   title: 'Event Hub | User Edit',
//   description: ''
// }

const EditUser: React.FC = () => {
  const { id }: any = useParams<any>()

  return <EditUserPage id={id} />
}

export default EditUser
