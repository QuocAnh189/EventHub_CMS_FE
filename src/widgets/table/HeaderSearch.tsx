import React, { FC } from 'react'

import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

interface Props {
  onChange: (value: string) => void
}
const HeaderSearch: FC<Props> = ({ onChange }) => {
  return (
    <div className='flex justify-content-end'>
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
