//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import Breadcrumb from '@widgets/breadcrumbs'
import HeaderProfile from './ui/Header'
import MainProfile from './ui/MainProfile'

const ProfilePage = () => {
  return (
    <MainLayout>
      <div className='mx-auto max-w-242.5'>
        <Breadcrumb pageName='Profile' />

        <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
          <HeaderProfile />
          <MainProfile />
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage
