export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen dark:bg-boxdark-2 dark:text-bodydark'>
      {children}
    </div>
  )
}
