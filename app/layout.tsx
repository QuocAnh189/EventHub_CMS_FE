import type { Metadata } from 'next'

import { AppLayout } from '@/app/layouts'
import '@app/styles/global.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event Hub',
  description: 'Event Management Platform'
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}

export default RootLayout
