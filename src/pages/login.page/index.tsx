import React from 'react'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import Breadcrumb from '@widgets/breadcrumbs'
import BackgroundLeft from './ui/BackgroundLeft'

//feature
import LoginForm from '@features/form/login.form'

const LoginPage: React.FC = () => {
  return (
    <MainLayout>
      <Breadcrumb pageName='Sign In' />

      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='flex flex-wrap items-center'>
          <BackgroundLeft />
          <div className='w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2'>
            <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
              <h2 className='mb-9 text-2xl font-bold text-black text-center dark:text-white sm:text-title-xl2'>
                Sign In
              </h2>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default LoginPage
