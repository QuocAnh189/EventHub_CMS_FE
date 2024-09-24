'use client'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import UserForm from '@features/form/user.form'

const CreateUserPage = () => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Create User' />
      <UserForm id={null} />
    </MainLayout>
  )
}

export default CreateUserPage
