'use client'
import React, { FC } from 'react'

//next
import Image from 'next/image'

//components
import Select from '@widgets/select/SelectGroupTwo'
import ButtonPrimary from '@widgets/button/ButtonPrimary'

const options = [
  { value: 'active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' }
]

interface Props {
  id: string | null
}

const ReviewForm: FC<Props> = ({ id }) => {
  const data = id ? 'Update Review' : 'Create Review'

  console.log(data)

  const handleCreate = () => {}

  return (
    <div className='w-full'>
      <ButtonPrimary title={id ? 'Update' : 'Create'} onClick={handleCreate} />
    </div>
  )
}

export default ReviewForm
