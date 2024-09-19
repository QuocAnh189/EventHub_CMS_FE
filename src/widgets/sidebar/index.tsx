'use client'

//hooks
import React, { useEffect, useRef, useState } from 'react'
import useLocalStorage from '@app/hooks/useLocalStorage'
import { usePathname } from 'next/navigation'

//next
import Link from 'next/link'
import Image from 'next/image'

//components
import SidebarItem from './SidebarItem'
import ClickOutside from '@widgets/ClickOutside'

//assets
import logo from '@shared/assets/images/logo_text.png'

interface Props {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

//route
import routes from '@app/routers'

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const pathname = usePathname()
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'dashboard')

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
          <Link href='/'>
            <Image
              width={130}
              height={32}
              src={logo}
              alt='Logo'
              style={{
                width: 'auto',
                height: 'auto'
              }}
              priority
            />
          </Link>
        </div>

        <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
          <nav className='no-scrollbar overflow-y-hidden mt-5 px-4 py-4 lg:mt-9 lg:px-6'>
            {routes.map((route, index: number) => (
              <div key={`route-${index}`}>
                <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
                  {route.name}
                </h3>

                <ul className='no-scrollbar mb-6 flex flex-col gap-1.5'>
                  {route.menuItems.map((menuItem, index: number) => (
                    <SidebarItem
                      key={index}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  )
}

export default Sidebar
