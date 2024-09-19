import { useState } from 'react'
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'

interface Props {
  totalRecords: number
  setPage(arg: number): void
  page: number
  rowsPerPageOptions: number[]
}

function Pagination({
  totalRecords,
  setPage,
  page,
  rowsPerPageOptions
}: Props) {
  const [rowsPerPage, setRowsPerPage] = useState(12)

  function onPageChange(event: PaginatorPageChangeEvent) {
    setRowsPerPage(event.rows)
    setPage(event.page)
  }

  return (
    <div className='card'>
      <Paginator
        first={5}
        rows={5}
        totalRecords={10}
        onPageChange={onPageChange}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  )
}

export default Pagination
