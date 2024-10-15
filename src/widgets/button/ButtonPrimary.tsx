import React, { FC } from 'react'

interface Props {
  title: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  loading?: boolean
}

const ButtonPrimary: FC<Props> = ({ title, onClick, type = 'button', loading }) => {
  return (
    <div className='flex justify-end'>
      <button
        type={type}
        onClick={onClick}
        className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8'
      >
        {loading ? <span className='loading loading-spinner loading-xs'></span> : title}
      </button>
    </div>
  )
}

export default ButtonPrimary
