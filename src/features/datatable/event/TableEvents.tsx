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
import { IEvent } from '@entities/event'

export default function TableEvents() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentEvent, setCurrentEvent] = useState<IEvent | null>(null)
  const [events, setEvents] = useState<IEvent[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleEdit = (id: string) => {
    router.push(`/events/${id}`)
  }

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds: string[] = events.map((event: IEvent) => event.id!)
      setSelectedEvents(allIds)
    } else {
      setSelectedEvents([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((selectedId: string) => selectedId !== id) : [...prevSelected, id]
    )
  }

  return (
    <div className=''>
      <div className='flex w-full justify-end items-center gap-4'>
        <ButtonPrimary
          title='View Trash'
          onClick={() => {
            router.push('/events/trash')
          }}
        />
        <ButtonPrimary
          onClick={() => {
            router.push('/events/create')
          }}
          title='Create'
        />
      </div>
      <Table
        value={events}
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
              checked={selectedEvents.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectAll(e)}
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedEvents.includes(rowData.id)}
              handleClick={() => handleSelectOne(rowData.id)}
            />
          )}
          style={{ width: '5%' }}
        />
        <Column
          field='icon'
          filter
          header='Image'
          headerStyle={{ fontSize: '14px' }}
          body={ImageColumn}
          style={{ width: '20%' }}
        />
        <Column
          field='name'
          header='Name'
          headerStyle={{ fontSize: '14px' }}
          sortable
          body={TextColumn}
          style={{ width: '20%' }}
        />
        <Column
          field='description'
          sortable
          header='Description'
          headerStyle={{ fontSize: '14px' }}
          body={TextColumn}
          style={{ width: '25%' }}
        />
        <Column
          field='status'
          header='Status'
          headerStyle={{ fontSize: '14px' }}
          body={SwitchColumn}
          style={{ width: '15%' }}
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
                setCurrentEvent(rowData)
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
          title='Trash Event'
          description={`Are you sure you want to trash ${currentEvent?.name} Event ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
