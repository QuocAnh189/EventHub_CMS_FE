import React from 'react'
import { InputSwitch } from 'primereact/inputswitch'

const SwitchColumn = (rowData: any) => {
  return (
    <InputSwitch
      checked={rowData.status === 'active' ? true : false}
      onChange={() => {}}
    />
  )
}

export default SwitchColumn
