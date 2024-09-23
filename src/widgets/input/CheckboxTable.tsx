import React, { FC } from 'react'

interface Props {
  checked: boolean
  handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxTable: FC<Props> = ({ checked, handleClick }) => {
  return <input type='checkbox' checked={checked} onChange={handleClick} />
}

export default CheckboxTable
