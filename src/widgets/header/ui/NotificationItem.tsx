import React, { FC } from 'react'

//next
import Link from 'next/link'

interface Props {
  title: string
  description: string
  time: string
}

const NotificationItem: FC<Props> = ({ title, description, time }) => {
  return (
    <li>
      <Link
        className='flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4'
        href='#'
      >
        <p className='text-sm'>
          <span className='text-black dark:text-white'>{title}</span>{' '}
          {description}
        </p>

        <p className='text-xs'>{time}</p>
      </Link>
    </li>
  )
}

export default NotificationItem
