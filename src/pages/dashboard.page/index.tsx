//next
import dynamic from 'next/dynamic'

//layout
import MainLayout from '@shared/ui/layouts/MainLayout'

//components
import CardDataStats from './ui/CardDataStats'
import ChartOne from './ui/Charts/ChartOne'
import ChartTwo from './ui/Charts/ChartTwo'

//constants
import list_of_total, { ITotalCard } from '@app/constant/dashboard.constant'

const ChartThree = dynamic(
  () => import('@pages/dashboard.page/ui/Charts/ChartThree'),
  {
    ssr: false
  }
)

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        {list_of_total.map((item: ITotalCard, index: number) => (
          <CardDataStats
            key={`index-${index}`}
            title={item.title}
            total={item.total}
            rate={item.rate}
            levelUp={item.levelUp}
          >
            {item.children}
          </CardDataStats>
        ))}
      </div>
      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </MainLayout>
  )
}

export default DashboardPage
