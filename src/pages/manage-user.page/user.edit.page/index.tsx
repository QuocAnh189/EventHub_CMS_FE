'use client'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import UserForm from '@features/form/user.form'
import { FC } from 'react'

interface Props {
  id: string | null
}

const EditUserPage: FC<Props> = ({ id }) => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Edit User' />
      <UserForm id={id} />
    </MainLayout>
  )
}

export default EditUserPage
