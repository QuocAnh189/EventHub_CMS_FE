import { Button } from 'primereact/button'
import React, { FC } from 'react'

interface Props {
  id: string
  isTrash?: boolean
  onEdit?: (id: string) => void
  onTrash?: (id: string) => void
  onRestore?: (id: string) => void
  onDelete?: (id: string) => void
}

const ActionColumn: FC<Props> = ({
  id,
  isTrash,
  onEdit,
  onTrash,
  onRestore,
  onDelete
}) => {
  return (
    <div className='flex items-center gap-4'>
      {isTrash && (
        <>
          <Button tooltipOptions={{ position: 'bottom' }} tooltip='Restore'>
            <i
              onClick={() => onRestore && onRestore(id)}
              className='pi pi-bookmark'
              style={{ fontSize: '1rem' }}
            />
          </Button>
          <Button tooltipOptions={{ position: 'bottom' }} tooltip='Delete'>
            <i
              onClick={() => onDelete && onDelete(id)}
              className='pi pi-trash'
              style={{ fontSize: '1rem' }}
            />
          </Button>
        </>
      )}
      {!isTrash && (
        <>
          <Button tooltipOptions={{ position: 'bottom' }} tooltip='Edit'>
            <i
              onClick={() => onEdit && onEdit(id)}
              className='pi pi-pen-to-square'
              style={{ fontSize: '1rem' }}
            />
          </Button>
          <Button tooltipOptions={{ position: 'bottom' }} tooltip='Trash'>
            <i
              onClick={() => onTrash && onTrash(id)}
              className='pi pi-trash'
              style={{ fontSize: '1rem' }}
            />
          </Button>
        </>
      )}
    </div>
  )
}

export default ActionColumn
