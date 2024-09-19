import React, { FC, useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  description: string
  action: string
  handleDelete: (value: string) => void
}

const DialogConfirm: FC<Props> = ({
  open,
  setOpen,
  title,
  description,
  action,
  handleDelete
}) => {
  const headerElement = (
    <div className='inline-flex align-items-center justify-content-center gap-2'>
      <span className='font-bold white-space-nowrap'>{title}</span>
    </div>
  )

  const footerContent = (
    <div className='space-x-4'>
      <Button
        className='bg-gray text-black px-3 py-2'
        label='Cancel'
        onClick={() => setOpen(false)}
      />
      <Button
        className='bg-red text-white px-3 py-2'
        label={action}
        onClick={() => {
          handleDelete('1')
        }}
      />
    </div>
  )

  return (
    <div className='card flex justify-content-center'>
      <Dialog
        visible={open}
        modal
        header={headerElement}
        footer={footerContent}
        style={{ width: '40rem' }}
        onHide={() => {
          if (!open) return
          setOpen(false)
        }}
      >
        <p className='m-0'>{description}</p>
      </Dialog>
    </div>
  )
}

export default DialogConfirm
