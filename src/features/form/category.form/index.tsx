'use client'
import React, { FC } from 'react'

//components
import Select from '@widgets/select/SelectGroupTwo'
import Image from 'next/image'

const options = [
  { value: 'active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' }
]

interface Props {
  id: string | null
}

const CategoryForm: FC<Props> = ({ id }) => {
  const data = id ? 'Update Category' : 'Create Category'

  console.log(data)

  return (
    <div className='w-full'>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke px-6.5 py-4 dark:border-strokedark'>
          <h3 className='font-medium text-black dark:text-white'>Category</h3>
        </div>
        <div className='flex flex-col gap-5.5 p-6.5'>
          <div className='space-y-4'>
            <Image
              src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
              alt=''
              width={100}
              height={100}
            />
            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
              Icon
            </label>
            <input
              type='file'
              className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
            />
          </div>

          <div>
            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
              Name
            </label>
            <input
              type='text'
              placeholder='Active Input'
              className='w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white'
            />
          </div>

          <Select title='Active' options={options} />
        </div>
      </div>
    </div>
  )
}

export default CategoryForm
