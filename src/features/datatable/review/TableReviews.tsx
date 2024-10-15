'use client'

import React, { useEffect, useState } from 'react'

//next
import { useRouter } from 'next/navigation'

//component
import Table from '@widgets/table'
import HeaderSearch from '@widgets/table/HeaderSearch'
import { Column } from 'primereact/column'
import TextColumn from '@widgets/table/column/TextColumn'
import ImageColumn from '@widgets/table/column/ImageColumn'
import SwitchColumn from '@widgets/table/column/SwitchColumn'
import ActionColumn from '@widgets/table/column/ActionColumn'
import DialogConfirm from '@widgets/dialog'
import ButtonPrimary from '@widgets/button/ButtonPrimary'
import CheckboxTable from '@widgets/input/CheckboxTable'

//interface
import { IReview } from '@entities/review'

export default function TableReviews() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentReview, setCurrentReview] = useState<IReview | null>(null)
  const [reviews, setReviews] = useState<IReview[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedReviews, setSelectedReviews] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/reviews/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = reviews.map((review: IReview) => review.id!)
      setSelectedReviews(allIds)
    } else {
      setSelectedReviews([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedReviews((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((selectedId: string) => selectedId !== id) : [...prevSelected, id]
    )
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end items-center gap-4'>
        <ButtonPrimary
          title='View Trash'
          onClick={() => {
            router.push('/reviews/trash')
          }}
        />
        <ButtonPrimary
          onClick={() => {
            router.push('/reviews/create')
          }}
          title='Create'
        />
      </div>
      <Table
        value={reviews}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        header={<HeaderSearch onChange={setSearch} />}
        editMode='row'
        setRowsNumber={setRowsNumber}
      >
        <Column
          header={
            <CheckboxTable
              checked={selectedReviews.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectAll(e)}
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedReviews.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '5%' }}
        />
        <Column
          field='event.name'
          sortable
          header='Event'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '20%' }}
        />
        <Column
          field='Content'
          sortable
          header='Content'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '20%' }}
        />
        <Column
          field='rate'
          header='Rate'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '15%' }}
        />
        <Column
          header='Action'
          headerStyle={{ fontSize: '14px' }}
          rowEditor={true}
          style={{ width: '10%', textAlign: 'center' }}
          body={(rowData) => (
            <ActionColumn
              id={rowData.id}
              onEdit={(id) => handleEdit(id)}
              onTrash={() => {
                setCurrentReview(rowData)
                setConfirmDelete(true)
              }}
            />
          )}
        />
      </Table>
      {confirmDelete && (
        <DialogConfirm
          open={confirmDelete}
          setOpen={setConfirmDelete}
          title='Trash Review'
          description={`Are you sure you want to trash review ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
