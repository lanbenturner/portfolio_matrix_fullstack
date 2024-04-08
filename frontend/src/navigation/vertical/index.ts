// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'bx:home-circle',
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'bx:envelope',
    },
    {
      path: '/acl',
      title: 'Access Control',
      icon: 'bx:shield',
    }
  ]
}

export default navigation
