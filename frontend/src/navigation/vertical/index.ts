// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      auth: false,
      icon: 'bx:home-circle',
    },
    {
      title: 'Second Page',
      path: '/second-page',
      auth: false,
      icon: 'bx:envelope',
    },
    {
      path: '/acl',
      title: 'Access Control',
      auth: false,
      icon: 'bx:shield',
    }
  ]
}

export default navigation
