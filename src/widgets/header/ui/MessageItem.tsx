import React, { FC } from 'react'

//next
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  avatar: string
  name: string
  content: string
  time: string
}

const MessageItem: FC<Props> = ({ avatar, name, content, time }) => {
  return (
    <li>
      <Link
        className='flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4'
        href='/messages'
      >
        <div className='h-12.5 w-12.5 rounded-full'>
          <Image
            width={112}
            height={112}
            src={avatar}
            alt='User'
            style={{
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>

        <div>
          <h6 className='text-sm font-medium text-black dark:text-white'>
            {name}
          </h6>
          <p className='text-sm'>{content}</p>
          <p className='text-xs'>{time}</p>
        </div>
      </Link>
    </li>
  )
}

export default MessageItem
