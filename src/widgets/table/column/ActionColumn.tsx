import React, { FC } from 'react'

interface Props {
  id: string
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const ActionColumn: FC<Props> = ({ id, onEdit, onDelete }) => {
  return (
    <div className='flex items-center gap-4'>
      <i
        onClick={() => onEdit(id)}
        className='pi pi-pen-to-square'
        style={{ fontSize: '1rem' }}
      />
      <i
        onClick={() => onDelete(id)}
        className='pi pi-trash'
        style={{ fontSize: '1rem' }}
      />
    </div>
  )
}

export default ActionColumn
