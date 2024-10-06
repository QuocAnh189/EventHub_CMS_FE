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

export default function TableCustomerTrash() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentCategory, setCurrentCategory] = useState<ICategory | null>(null)
  const [customers, setCustomers] = useState<ICategory[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/customers/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = customers.map((customer) => customer.id!)
      setSelectedCustomers(allIds)
    } else {
      setSelectedCustomers([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId: string) => selectedId !== id)
        : [...prevSelected, id]
    )
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end items-center gap-4'>
        <ButtonPrimary
          title='View Active'
          onClick={() => {
            router.push('/customer-list')
          }}
        />
      </div>
      <Table
        value={customers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        header={<HeaderSearch isTrash={true} onChange={setSearch} />}
        editMode='row'
        setRowsNumber={setRowsNumber}
      >
        <Column
          header={
            <CheckboxTable
              checked={selectedCustomers.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSelectAll(e)
              }
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedCustomers.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '5%' }}
        />
        <Column
          field='icon'
          header='Avatar'
          filter
          headerStyle={{ fontSize: '14px' }}
          body={ImageColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='name'
          sortable
          header='Name'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='email'
          sortable
          header='Email'
          headerStyle={{ fontSize: '14px' }}
          body={SwitchColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='gender'
          header='Gender'
          headerStyle={{ fontSize: '14px' }}
          body={SwitchColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='phoneNumber'
          header='Phone'
          headerStyle={{ fontSize: '14px' }}
          body={SwitchColumn}
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
          title='Trash User'
          description={`Are you sure you want to delete ${currentCategory?.name} user ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
