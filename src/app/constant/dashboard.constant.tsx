//icons
import { IconCategory } from '@shared/assets/svgs/ui/sidebar/IconCategory'
import { IconReviews } from '@shared/assets/svgs/ui/common/IconReviews'
import { IconAdmin } from '@shared/assets/svgs/ui/common/IconAdmin'
import { IconUser } from '@shared/assets/svgs/ui/header/IconUser'
import { IconOrganizer } from '@shared/assets/svgs/ui/common/IconOrganizer'
import { IconOrder } from '@shared/assets/svgs/ui/sidebar/IconOrder'
import { IconEvent } from '@shared/assets/svgs/ui/sidebar/IconEvent'

export interface ITotalCard {
  title: string
  total: string
  rate: string
  levelUp?: boolean
  children: JSX.Element
}

const list_of_total = [
  {
    title: 'Total Admin',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconAdmin className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Users',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconUser className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Organizers',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconOrganizer className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Events',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconEvent className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Categories',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconCategory className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Reviews',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconReviews className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Orders',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconOrder className='fill-primary dark:fill-white' />
  },
  {
    title: 'Total Pending Orders',
    total: '3.456',
    rate: '4.35%',
    levelUp: true,
    children: <IconOrder className='fill-primary dark:fill-white' />
  }
]

export default list_of_total
