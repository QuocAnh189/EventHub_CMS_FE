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
import DialogConfirm from '@widgets/dialog'
import CheckboxTable from '@widgets/input/CheckboxTable'
import ButtonPrimary from '@widgets/button/ButtonPrimary'

export default function TableTransactions() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentTransaction, setCurrentTransaction] = useState<any | null>(null)
  const [transactions, setTransactions] = useState<any[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedTransaction, setSelectedTransaction] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectTrash = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const TransactionIds: string[] = transactions.map(
        (Transaction: any) => Transaction.id!
      )
      setSelectedTransaction(TransactionIds)
    } else {
      setSelectedTransaction([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedTransaction((prevSelected) =>
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
            router.push('/transactions/trash')
          }}
        />
      </div>
      <Table
        value={transactions}
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
              checked={selectedTransaction.length === rowsNumber}
              handleClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSelectTrash(e)
              }
            />
          }
          body={(rowData) => (
            <CheckboxTable
              checked={selectedTransaction.includes(rowData.id)}
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
          field='transactionId'
          header='Transaction Id'
          body={TextColumn}
          sortable
          style={{ width: '15%' }}
        />
        <Column
          field='paymentMethod'
          body={TextColumn}
          header='Payment Method'
          sortable
          style={{ width: '15%' }}
        />
        <Column
          field='eventQuantity'
          header='Amount In Base Currency'
          style={{ width: '15%' }}
          sortable
          body={SwitchColumn}
        />
        <Column
          field='eventQuantity'
          header='Amount In Real Currency'
          style={{ width: '15%' }}
          sortable
          body={SwitchColumn}
        />
      </Table>
      {confirmDelete && (
        <DialogConfirm
          open={confirmDelete}
          setOpen={setConfirmDelete}
          title='Trash Transaction'
          description={`Are you sure you want to trash ${currentTransaction?.name} transaction ?`}
          action='Delete'
          handleDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  )
}
