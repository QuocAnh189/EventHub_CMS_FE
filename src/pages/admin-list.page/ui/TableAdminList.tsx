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
import { ICategory } from '@entities/category'

export default function TableAdminList() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentCategory, setCurrentCategory] = useState<ICategory | null>(null)
  const [admins, setAdmins] = useState<ICategory[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/users/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = admins.map((admin) => admin.id!)
      setSelectedAdmins(allIds)
    } else {
      setSelectedAdmins([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedAdmins((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId: string) => selectedId !== id)
        : [...prevSelected, id]
    )
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end items-center gap-4'>
        <ButtonPrimary
          title='View Trash'
          onClick={() => {
            router.push('/admin-list/trash')
          }}
        />
      </div>
      <Table
        value={admins}
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
              checked={selectedAdmins.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSelectAll(e)
              }
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedAdmins.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '10%' }}
        />
        <Column
          field='icon'
          header='Avatar'
          filter
          style={{ width: '15%' }}
          body={ImageColumn}
        />
        <Column
          field='name'
          body={TextColumn}
          header='Name'
          sortable
          style={{ width: '15%' }}
        />
        <Column
          field='email'
          header='Email'
          style={{ width: '15%' }}
          sortable
          body={SwitchColumn}
        />
        <Column
          field='gender'
          header='Gender'
          style={{ width: '15%' }}
          body={SwitchColumn}
        />
        <Column
          field='phoneNumber'
          header='Phone'
          style={{ width: '15%' }}
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
