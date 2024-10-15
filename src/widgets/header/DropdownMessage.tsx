import { useState } from 'react'
import Link from 'next/link'

//components
import ClickOutside from '@widgets/ClickOutside'
import MessageItem from './ui/MessageItem'

//icon
import { IconMessage } from '@shared/assets/svgs/ui/header/IconMessage'

const message = {
  avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  name: 'Mariya Desoja',
  content: 'I like your confidence 💪',
  time: '2min ago'
}

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className='relative'>
      <li className='relative'>
        <Link
          onClick={() => {
            setNotifying(false)
            setDropdownOpen(!dropdownOpen)
          }}
          className='relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white'
          href='#'
        >
          <span
            className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? 'hidden' : 'inline'
            }`}
          >
            <span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75'></span>
          </span>

          <IconMessage className='fill-current duration-300 ease-in-out' />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className='px-4.5 py-3'>
              <h5 className='text-sm font-medium text-bodydark2'>Messages</h5>
            </div>

            <ul className='flex h-auto flex-col overflow-y-auto'>
              {Array.from({ length: 5 }).map((_, i) => (
                <MessageItem key={i} {...message} />
              ))}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  )
}

export default DropdownMessage
