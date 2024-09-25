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

export default function TableOrdersPending() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentAllOrders, setCurrentAllOrders] = useState<any | null>(null)
  const [orders, setOrders] = useState<any[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = orders.map((AllOrders: any) => AllOrders.id!)
      setSelectedOrders(allIds)
    } else {
      setSelectedOrders([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedOrders((prevSelected) =>
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
            router.push('/pending-orders/trash')
          }}
        />
      </div>
      <Table
        value={orders}
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
              checked={selectedOrders.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSelectAll(e)
              }
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedOrders.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '5%' }}
        />
        <Column
          field='invoiceId'
          header='Invoice Id'
          filter
          style={{ width: '15%' }}
          body={ImageColumn}
        />
        <Column
          field='customer'
          header='Customer'
          body={TextColumn}
          sortable
          style={{ width: '10%' }}
        />
        <Column
          field='date'
          body={TextColumn}
          header='Date'
          sortable
          style={{ width: '10%' }}
        />
        <Column
          field='eventQuantity'
          header='Event Quantity'
          style={{ width: '12%' }}
          body={SwitchColumn}
        />
        <Column
          field='orderStatus'
          header='Order Status'
          style={{ width: '12%' }}
          body={SwitchColumn}
        />
        <Column
          field='paymentStatus'
          header='Payment Status'
          style={{ width: '12%' }}
          body={SwitchColumn}
        />
        <Column
          field='paymentMethod'
          header='Payment Method'
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
              onTrash={() => {
                setCurrentAllOrders(rowData)
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
          title='Trash AllOrders'
          description={`Are you sure you want to trash ${currentAllOrders?.name} AllOrders ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
