import { IconCategory } from '@shared/assets/svgs/ui/sidebar/IconCategory'
import { IconDashboard } from '@shared/assets/svgs/ui/sidebar/IconDashboard'
import { IconEvent } from '@shared/assets/svgs/ui/sidebar/IconEvent'
import { IconOrder } from '@shared/assets/svgs/ui/sidebar/IconOrder'
import { IconPayment } from '@shared/assets/svgs/ui/sidebar/IconPayment'
import { IconProfile } from '@shared/assets/svgs/ui/sidebar/IconProfile'
import { IconTransaction } from '@shared/assets/svgs/ui/sidebar/IconTransaction'
import { IconUser } from '@shared/assets/svgs/ui/sidebar/IconUser'

const routes = [
  {
    name: 'DASHBOARD',
    menuItems: [
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '/'
      }
    ]
  },
  {
    name: 'ECOMMERCE',
    menuItems: [
      {
        icon: <IconCategory className='fill-current' />,
        label: 'Manage Categories',
        route: '#',
        children: [{ label: 'Category', route: '/categories' }]
      },
      {
        icon: <IconEvent className='fill-current' />,
        label: 'Manage Events',
        route: '#',
        children: [
          { label: 'Event', route: '/events' },
          { label: 'Ticket', route: '/tickets' },
          { label: 'Reviews', route: '/reviews' }
        ]
      },
      {
        icon: <IconOrder className='fill-current' />,
        label: 'Manage Orders',
        route: '#',
        children: [
          { label: 'All Orders', route: '/all-orders' },
          { label: 'All Pending Orders', route: '/pending-orders' },
          { label: 'All Cancel Orders', route: '/cancel-orders' }
        ]
      },
      {
        icon: <IconTransaction className='fill-current' />,
        label: 'Manage Transactions',
        route: '/transactions'
      },
      {
        icon: <IconPayment className='fill-current' />,
        label: 'Manage Payment',
        route: '/payments'
      }
    ]
  },
  {
    name: 'SETTINGS & MORE',
    menuItems: [
      {
        icon: <IconUser className='fill-current' />,
        label: 'Manage User',
        route: '#',
        children: [
          { label: 'Customer List', route: '/customer-list' },
          { label: 'Admin List', route: '/admin-list' },
          { label: 'Manage User', route: '/manage-user' },
          { label: 'Roles Permission', route: '/roles-permission' }
        ]
      },
      {
        icon: <IconProfile />,
        label: 'Profile',
        route: '/profile'
      }
    ]
  }
]

export default routes
