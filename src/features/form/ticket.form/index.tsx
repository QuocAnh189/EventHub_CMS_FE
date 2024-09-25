'use client'
import React, { FC } from 'react'

//components
import ButtonPrimary from '@widgets/button/ButtonPrimary'

const options = [
  { value: 'active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' }
]

interface Props {
  id: string | null
}

const TicketForm: FC<Props> = ({ id }) => {
  const data = id ? 'Update Ticket' : 'Create Ticket'

  console.log(data)

  const handleCreate = () => {}

  return (
    <div className='w-full'>
      <ButtonPrimary title={id ? 'Update' : 'Create'} onClick={handleCreate} />
    </div>
  )
}

export default TicketForm
