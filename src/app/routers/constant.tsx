import { IconDashboard } from '@shared/assets/svgs/ui/sidebar/IconDashBoard'

const routes = [
  {
    name: 'MENU',
    menuItems: [
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#',
        children: [{ label: 'Overview', route: '/' }]
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#'
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#'
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#',
        children: [
          { label: 'Form Elements', route: '/forms/form-elements' },
          { label: 'Form Layout', route: '/forms/form-layout' }
        ]
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#'
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#'
      }
    ]
  },
  {
    name: 'OTHERS',
    menuItems: [
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#'
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#',
        children: [
          { label: 'Alerts', route: '/ui/alerts' },
          { label: 'Buttons', route: '/ui/buttons' }
        ]
      },
      {
        icon: <IconDashboard className='fill-current' />,
        label: 'Dashboard',
        route: '#',
        children: [
          { label: 'Sign In', route: '/auth/signin' },
          { label: 'Sign Up', route: '/auth/signup' }
        ]
      }
    ]
  }
]

export default routes
