'use client'

import React, { useEffect, useState } from 'react'

//next
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//component
import Table from '@widgets/table'
import HeaderSearch from '@widgets/table/HeaderSearch'
import { Column } from 'primereact/column'
import TextColumn from '@widgets/table/column/TextColumn'
import ImageColumn from '@widgets/table/column/ImageColumn'
import SwitchColumn from '@widgets/table/column/SwitchColumn'
import ActionColumn from '@widgets/table/column/ActionColumn'

//interface
import { ICategory } from '@entities/category'
import DialogConfirm from '@widgets/dialog'

const data: ICategory[] = [
  {
    id: '1',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Music',
    status: 'active'
  },
  {
    id: '2',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Sport',
    status: 'active'
  },
  {
    id: '3',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Education',
    status: 'active'
  },
  {
    id: '4',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Fashion',
    status: 'active'
  },
  {
    id: '5',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Art',
    status: 'active'
  },
  {
    id: '6',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Concert',
    status: 'active'
  },
  {
    id: '7',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Festival',
    status: 'active'
  },
  {
    id: '8',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Game',
    status: 'active'
  },
  {
    id: '9',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Workshop',
    status: 'active'
  },
  {
    id: '10',
    icon: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    name: 'Dance',
    status: 'active'
  }
]

export default function TableCategories() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<ICategory | null>(null)
  const [categories, setCategories] = useState<ICategory[]>(data)

  const [search, setSearch] = useState('')
  const [rowsNumber, setRowsNumber] = useState(5)

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/categories/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end'>
        <Link
          href='/categories/create'
          className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8'
        >
          Create
        </Link>
      </div>
      <Table
        value={categories}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        header={<HeaderSearch onChange={setSearch} />}
        editMode='row'
        setRowsNumber={setRowsNumber}
      >
        <Column selectionMode='multiple' style={{ width: '10%' }} />
        <Column
          field='icon'
          header='Image'
          filter
          style={{ width: '25%' }}
          body={ImageColumn}
        />
        <Column
          field='name'
          body={TextColumn}
          header='Name'
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field='status'
          header='Status'
          style={{ width: '20%' }}
          body={SwitchColumn}
        />
        <Column
          header='Action'
          rowEditor={true}
          style={{ width: '15%', textAlign: 'center' }}
          body={(rowData) => (
            <ActionColumn
              id={rowData.id}
              onEdit={(id) => handleEdit(id)}
              onDelete={() => {
                setCurrentCategory(rowData)
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
          title='Delete Category'
          description={`Are you sure you want to delete ${currentCategory?.name}?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
