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
import { ITicket } from '@entities/ticket'

export default function TableTicket() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentTicket, setCurrentTicket] = useState<ITicket | null>(null)
  const [tickets, setTickets] = useState<ITicket[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedTickets, setSelectedTickets] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/tickets/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = tickets.map((ticket: ITicket) => ticket.id!)
      setSelectedTickets(allIds)
    } else {
      setSelectedTickets([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedTickets((prevSelected) =>
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
            router.push('/tickets/trash')
          }}
        />
        <ButtonPrimary
          onClick={() => {
            router.push('/tickets/create')
          }}
          title='Create'
        />
      </div>
      <Table
        value={tickets}
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
              checked={selectedTickets.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSelectAll(e)
              }
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedTickets.includes(rowData.id)}
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
          style={{ width: '15%' }}
        />
        <Column
          field='customerName'
          sortable
          header='Customer'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='customerEmail'
          sortable
          header='Name'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '15%' }}
        />
        <Column
          field='payment'
          header='Payment'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '12%' }}
        />
        <Column
          field='status'
          header='Status'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '12%' }}
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
                setCurrentTicket(rowData)
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
          title='Trash Ticket'
          description={`Are you sure you want to trash ticket ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
