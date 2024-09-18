import React from 'react'

//next
import Image from 'next/image'
import { IconUpload } from '@shared/assets/svgs/ui/common/IconUpload'

const UploadForm = () => {
  return (
    <div className='col-span-5 xl:col-span-2'>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke px-7 py-4 dark:border-strokedark'>
          <h3 className='font-medium text-black dark:text-white'>Your Photo</h3>
        </div>
        <div className='p-7'>
          <form action='#'>
            <div className='mb-4 flex items-center gap-3'>
              <div className='h-14 w-14 rounded-full'>
                <Image
                  src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                  width={55}
                  height={55}
                  alt='User'
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <div>
                <span className='mb-1.5 text-black dark:text-white'>
                  Edit your photo
                </span>
                <span className='flex gap-2.5'>
                  <button className='text-sm hover:text-primary'>Delete</button>
                  <button className='text-sm hover:text-primary'>Update</button>
                </span>
              </div>
            </div>

            <div
              id='FileUpload'
              className='relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5'
            >
              <input
                type='file'
                accept='image/*'
                className='absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none'
              />
              <div className='flex flex-col items-center justify-center space-y-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark'>
                  <IconUpload />
                </span>
                <p>
                  <span className='text-primary'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='mt-1.5'>SVG, PNG, JPG or GIF</p>
                <p>(max, 800 X 800px)</p>
              </div>
            </div>

            <div className='flex justify-end gap-4.5'>
              <button
                className='flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white'
                type='submit'
              >
                Cancel
              </button>
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

export default UploadForm
