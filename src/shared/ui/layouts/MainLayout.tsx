'use client'

//redux
import ReduxProvider from '@app/providers/ReduxProvider'

//hooks
import React, { useState } from 'react'

//components
import Sidebar from '@widgets/sidebar'
import Header from '@widgets/header'

//prime
import { PrimeReactProvider } from 'primereact/api'

import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <ReduxProvider>
      <PrimeReactProvider>
        <div className='flex'>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className='relative flex flex-1 flex-col lg:ml-72.5'>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                {children}
              </div>
            </main>
          </div>
        </div>
      </PrimeReactProvider>
    </ReduxProvider>
  )
}
