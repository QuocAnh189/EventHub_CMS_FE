'use client'

import React, { useEffect, useState } from 'react'

//next
import { useRouter } from 'next/navigation'

//component
import { Skeleton } from 'primereact/skeleton'
import Table from '@widgets/table'
import HeaderSearch from '@widgets/table/HeaderSearch'
import { Column } from 'primereact/column'
import TextColumn from '@widgets/table/column/TextColumn'
import ImageColumn from '@widgets/table/column/ImageColumn'
import ActionColumn from '@widgets/table/column/ActionColumn'
import DialogConfirm from '@widgets/dialog'
import ButtonPrimary from '@widgets/button/ButtonPrimary'
import CheckboxTable from '@widgets/input/CheckboxTable'

//interface
import { ICategory } from '@shared/interfaces/category/model'
import { IGetParam, initGetParam } from '@shared/interfaces/common/index'

//redux
import { useGetCategoriesQuery } from '@app/redux/apis/category.api'

export default function TableCategories() {
  const router = useRouter()

  const [filter, setFilter] = useState<IGetParam>(initGetParam)
  const { data, isSuccess } = useGetCategoriesQuery(filter)

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentCategory, setCurrentCategory] = useState<ICategory | null>(null)
  const [categories, setCategories] = useState<ICategory[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    setFilter({ ...filter, searches: search })
  }, [search])

  useEffect(() => {
    console.log(data?.metadata)
    if (data?.items) {
      setCategories(data.items)
    }
  }, [data?.items])

  const handleEdit = (id: string) => {
    router.push(`/categories/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = categories.map((category) => category.id!)
      setSelectedCategories(allIds)
    } else {
      setSelectedCategories([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((selectedId: string) => selectedId !== id) : [...prevSelected, id]
    )
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end items-center gap-4'>
        <ButtonPrimary
          title='View Trash'
          onClick={() => {
            router.push('/categories/trash')
          }}
        />
        <ButtonPrimary
          onClick={() => {
            router.push('/categories/create')
          }}
          title='Create'
        />
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
        <Column
          header={
            <CheckboxTable
              checked={selectedCategories.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectAll(e)}
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedCategories.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '5%' }}
        />
        <Column
          field='icon'
          header='Image'
          headerStyle={{ fontSize: '14px' }}
          body={
            isSuccess ? (
              (rowData: ICategory) => <ImageColumn url={rowData.iconImageUrl} />
            ) : (
              <Skeleton width='10rem' className='mb-2' />
            )
          }
          style={{ width: '20%' }}
        />
        <Column
          field='name'
          filter
          sortable
          header='Name'
          headerStyle={{ fontSize: '14px' }}
          body={
            isSuccess ? (
              (rowData: ICategory) => <TextColumn text={rowData.name} />
            ) : (
              <Skeleton width='10rem' className='mb-2' />
            )
          }
          style={{ width: '25%' }}
        />
        <Column
          field='color'
          header='Color'
          headerStyle={{ fontSize: '14px' }}
          body={
            isSuccess ? (
              (rowData: ICategory) => <TextColumn text={rowData.color} />
            ) : (
              <Skeleton width='10rem' className='mb-2' />
            )
          }
          style={{ width: '20%' }}
        />
        <Column
          header='Action'
          headerStyle={{ fontSize: '14px' }}
          rowEditor={true}
          style={{ width: '15%', textAlign: 'center' }}
          body={(rowData) => (
            <ActionColumn
              id={rowData.id}
              onEdit={(id) => handleEdit(id)}
              onTrash={() => {
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
          title='Trash Category'
          description={`Are you sure you want to trash ${currentCategory?.name} category ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
