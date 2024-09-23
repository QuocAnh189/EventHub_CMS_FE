import React, { FC } from 'react'

interface Props {
  title: string
  onClick: () => void
}

const ButtonPrimary: FC<Props> = ({ title, onClick }) => {
  return (
    <div className='flex justify-end'>
      <button
        onClick={onClick}
        className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8'
      >
        {title}
      </button>
    </div>
  )
}

export default ButtonPrimary
