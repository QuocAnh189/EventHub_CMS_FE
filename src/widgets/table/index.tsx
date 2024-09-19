import React, { FC, PropsWithChildren } from 'react'
import { DataTable } from 'primereact/datatable'
import './style.scss'

export interface IDataTable {
  value: any
  paginator: boolean
  rows: number
  rowsPerPageOptions: number[]
  tableStyle: object
  header: React.ReactNode
  editMode?: 'row' | 'cell'
  setRowsNumber: (rows: number) => void
}

const Table: FC<PropsWithChildren<IDataTable>> = ({
  value,
  paginator,
  rows,
  rowsPerPageOptions,
  tableStyle,
  children,
  header,
  editMode,
  setRowsNumber
}) => {
  return (
    <div className='container'>
      <DataTable
        className=''
        editMode={editMode}
        dataKey='id'
        value={value}
        paginator={paginator}
        rows={rows}
        rowsPerPageOptions={rowsPerPageOptions}
        style={tableStyle}
        header={header}
        selectionMode='multiple'
        selection={[]}
        selectionPageOnly={true}
        onChange={(e) => console.log(e)}
      >
        {children}
      </DataTable>
    </div>
  )
}

export default Table
