import React from 'react'

//next
import Image from 'next/image'

//component
import Breadcrumb from '@widgets/breadcrumbs'

//feature
import UpdateProfileForm from '@features/form/profile.form'
import UploadForm from '@features/form/upload.form'

const SettingComponent = () => {
  return (
    <div className='mx-auto max-w-270'>
      <Breadcrumb pageName='Settings' />

      <div className='grid grid-cols-5 gap-8'>
        <UpdateProfileForm />
        <UploadForm />
      </div>
    </div>
  )
}

export default SettingComponent
