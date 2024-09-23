import React, { FC } from 'react'

//components
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

interface Props {
  isTrash?: boolean
  onChange: (value: string) => void
}
const HeaderSearch: FC<Props> = ({ onChange, isTrash }) => {
  return (
    <div className='flex w-full justify-between items-end'>
      <div className='flex items-center gap-12'>
        <Button className='flex items-center gap-4'>
          <InputIcon className='pi pi-download' />
          <p className='hover:underline'>Download</p>
        </Button>

        {isTrash && (
          <>
            <Button className='flex items-center gap-4 hover:bg-slate-200 px-4 py-2'>
              <InputIcon className='pi pi-bookmark' />
              <p className=''>Restore</p>
            </Button>
            <Button className='flex items-center gap-4 hover:bg-slate-200 px-4 py-2'>
              <InputIcon className='pi pi-trash' />
              <p className=''>Delete</p>
            </Button>
          </>
        )}

        {!isTrash && (
          <Button className='flex items-center gap-4 hover:bg-slate-200 px-4 py-2'>
            <InputIcon className='pi pi-trash' />
            <p className=''>Trash</p>
          </Button>
        )}
      </div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search' />
        <InputText
          onChange={(e) => onChange(e.target.value)}
          placeholder='Search'
        />
      </IconField>
    </div>
  )
}

export default HeaderSearch
