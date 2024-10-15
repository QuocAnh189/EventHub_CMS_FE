'use client'
import React, { FC, use, useEffect } from 'react'

//next
import Image from 'next/image'

//components
import ButtonPrimary from '@widgets/button/ButtonPrimary'

//form
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//interface
import {
  CreateCategoryPayload,
  UpdateCategoryPayload,
  initCreateCategoryPayload
} from '@shared/interfaces/category/payload'

//redux
import {
  useCreateCategoryMutation,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation
} from '@app/redux/apis/category.api'

//image
import image_default from '@shared/assets/images/image_default.jpg'
import { toast } from 'react-toastify'

const formSchema = z.object({
  iconImageUrl: z.any(),
  name: z.string().min(1, 'Name is not empty').max(32, { message: 'Name must not exceed 32 characters' }),
  color: z.string().min(1, 'Color is not empty').max(12, { message: 'phone must not exceed 12 characters' })
})

interface Props {
  id: string | null
}

const CategoryForm: FC<Props> = ({ id }) => {
  const { data } = id ? useGetCategoryByIdQuery(id!) : { data: null }
  const [CreateCategory, { isLoading: loadingCreate }] = useCreateCategoryMutation()
  const [UpdateCategory, { isLoading: loadingUpdate }] = useUpdateCategoryMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<CreateCategoryPayload | UpdateCategoryPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: initCreateCategoryPayload
  })

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key: any) => {
        setValue(key, data[key as keyof typeof data])
      })
    }
  }, [data])

  const onSubmit: SubmitHandler<CreateCategoryPayload | UpdateCategoryPayload> = async (data) => {
    const formData = new FormData()

    Object.keys(data).forEach((key: any) => {
      formData.append(key, data[key as keyof typeof data])
    })

    try {
      const result = id ? await UpdateCategory({ id: data.id!, data: formData }) : await CreateCategory(formData)
      if (result.error) {
        console.log(result.error)
        return toast.error('Loi')
      }
      toast.success('Success')
    } catch (error: any) {
      console.log(error)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue('iconImageUrl', file)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mb-10'>
        <div className='border-b border-stroke px-6.5 py-4 dark:border-strokedark'>
          <h3 className='font-medium text-black dark:text-white'>Category</h3>
        </div>
        <div className='flex flex-col gap-5.5 p-6.5'>
          <div className='space-y-4'>
            <Image src={data?.iconImageUrl ? data?.iconImageUrl : image_default} alt='' width={100} height={100} />
            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>Icon</label>
            <input
              accept='image/*'
              type='file'
              onChange={handleFileChange}
              className={`w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary`}
            />
          </div>

          <div>
            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>Name</label>
            <input
              {...register('name')}
              type='text'
              name='name'
              placeholder='Enter name'
              className={`${
                errors.name && 'outline-red'
              } w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white`}
            />
            {errors.name && <p className='text-rose-500 mt-2'>{errors.name.message}</p>}
          </div>

          <div>
            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>Color</label>
            <input
              {...register('color')}
              type='text'
              name='color'
              placeholder='Active Input'
              className={`${
                errors.name && 'outline-red'
              } w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white`}
            />
            {errors.color && <p className='text-rose-500 mt-2'>{errors.color.message}</p>}
          </div>
        </div>
      </div>
      <ButtonPrimary type='submit' title={id ? 'Update' : 'Create'} loading={loadingCreate || loadingUpdate} />
    </form>
  )
}

export default CategoryForm
