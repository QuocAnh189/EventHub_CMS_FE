import React from 'react'

//icon
import { IconUser } from '@shared/assets/svgs/ui/header/IconUser'
import { IconEmail } from '@shared/assets/svgs/ui/common/IconEmail'
import { IconUpdate } from '@shared/assets/svgs/ui/common/IconUpdate'

const UpdateProfileForm = () => {
  return (
    <div className='col-span-5 xl:col-span-3'>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke px-7 py-4 dark:border-strokedark'>
          <h3 className='font-medium text-black dark:text-white'>
            Personal Information
          </h3>
        </div>
        <div className='p-7'>
          <form action='#'>
            <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
              <div className='w-full sm:w-1/2'>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='fullName'
                >
                  Full Name
                </label>
                <div className='relative'>
                  <span className='absolute left-4.5 top-4'>
                    <IconUser className='fill-current' />
                  </span>
                  <input
                    className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='Anh Quoc'
                    defaultValue='Tran Phuoc Anh Quoc'
                  />
                </div>
              </div>

              <div className='w-full sm:w-1/2'>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='phoneNumber'
                >
                  Phone Number
                </label>
                <input
                  className='w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  placeholder='Enter you phone number'
                  defaultValue='+847 0246 5814'
                />
              </div>
            </div>

            <div className='mb-5.5'>
              <label
                className='mb-3 block text-sm font-medium text-black dark:text-white'
                htmlFor='emailAddress'
              >
                Email Address
              </label>
              <div className='relative'>
                <span className='absolute left-4.5 top-4'>
                  <IconEmail className='fill-current' />
                </span>
                <input
                  className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                  type='email'
                  name='emailAddress'
                  id='emailAddress'
                  placeholder='Enter your email address'
                  defaultValue='anhquoc18092003@gmail.com'
                />
              </div>
            </div>

            <div className='mb-5.5'>
              <label
                className='mb-3 block text-sm font-medium text-black dark:text-white'
                htmlFor='Username'
              >
                Username
              </label>
              <input
                className='w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                type='text'
                name='Username'
                id='Username'
                placeholder='Enter your username'
                defaultValue='Anh Quoc'
              />
            </div>

            <div className='mb-5.5'>
              <label
                className='mb-3 block text-sm font-medium text-black dark:text-white'
                htmlFor='Username'
              >
                BIO
              </label>
              <div className='relative'>
                <span className='absolute left-4.5 top-4'>
                  <IconUpdate className='fill-current' />
                </span>

                <textarea
                  className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                  name='bio'
                  id='bio'
                  rows={6}
                  placeholder='Write your bio here'
                  defaultValue=''
                ></textarea>
              </div>
            </div>

            <div className='flex justify-end gap-4.5'>
              <button
                className='flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90'
                type='submit'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfileForm
