import { useState } from 'react'

//next
import Link from 'next/link'
import Image from 'next/image'

//components
import ClickOutside from '@widgets/ClickOutside'

//icons
import { IconDropDown } from '@shared/assets/svgs/ui/header/IconDropDown'
import { IconUser } from '@shared/assets/svgs/ui/header/IconUser'
import { IconContact } from '@shared/assets/svgs/ui/header/IconContact'
import { IconSettings } from '@shared/assets/svgs/ui/header/IconSettings'
import { IconLogout } from '@shared/assets/svgs/ui/header/IconLogout'

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className='relative'>
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
        href='#'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black dark:text-white'>
            Anh Quoc
          </span>
          <span className='block text-xs'>Admin</span>
        </span>

        <span className='h-12 w-12 rounded-full'>
          <Image
            width={112}
            height={112}
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            style={{
              width: 'auto',
              height: 'auto',
              borderRadius: '50%'
            }}
            alt='User'
          />
        </span>

        <IconDropDown className='hidden fill-current sm:block' />
      </Link>

      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className='flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark'>
            <li>
              <Link
                href='/profile'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IconUser className='fill-current' />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IconContact className='fill-current' />
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                href='/settings'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
              >
                <IconSettings className='fill-current' />
                Account Settings
              </Link>
            </li>
          </ul>
          <button className='flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'>
            <IconLogout className='fill-current' />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  )
}

export default DropdownUser
