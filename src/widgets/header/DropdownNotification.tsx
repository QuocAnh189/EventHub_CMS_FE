//hooks
import { useState } from 'react'

//next
import Link from 'next/link'

//components
import ClickOutside from '@widgets/ClickOutside'
import NotificationItem from './ui/NotificationItem'

//icon
import { IconNotify } from '@shared/assets/svgs/ui/header/IconNotify'

const notification = {
  title: 'Edit your information in a swipe',
  description:
    'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  time: '12 May, 2025'
}

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className='relative'>
      <li>
        <Link
          onClick={() => {
            setNotifying(false)
            setDropdownOpen(!dropdownOpen)
          }}
          href='#'
          className='relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white'
        >
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? 'hidden' : 'inline'
            }`}
          >
            <span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75'></span>
          </span>

          <IconNotify className='fill-current duration-300 ease-in-out' />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className='px-4.5 py-3'>
              <h5 className='text-sm font-medium text-bodydark2'>
                Notification
              </h5>
            </div>

            <ul className='flex h-auto flex-col overflow-y-auto'>
              {Array.from({ length: 5 }).map((_, i: number) => (
                <NotificationItem {...notification} />
              ))}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  )
}

export default DropdownNotification
