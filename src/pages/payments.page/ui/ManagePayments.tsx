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
import CheckboxTable from '@widgets/input/CheckboxTable'

export default function ManagePayments() {
  const router = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [currentPayments, setCurrentPayments] = useState<any | null>(null)
  const [payments, setPayments] = useState<any[]>([])

  const [search, setSearch] = useState<string>('')
  const [rowsNumber, setRowsNumber] = useState<number>(5)
  const [selectedPayments, setSelectedPayments] = useState<string[]>([])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleDelete = (id: string) => {
    alert(id)
  }

  const handleSelectTrash = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const paymentsIds: string[] = payments.map(
        (Payments: any) => Payments.id!
      )
      setSelectedPayments(paymentsIds)
    } else {
      setSelectedPayments([])
    }
  }

  const handleSelectOne = (id: string) => {
    setSelectedPayments((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId: string) => selectedId !== id)
        : [...prevSelected, id]
    )
  }

  return <div className=''></div>
}
