import { IconType } from 'react-icons'
import {
  IoPerson,
  IoSparkles,
  IoConstruct,
  IoPersonOutline,
  IoSparklesOutline,
  IoConstructOutline
} from 'react-icons/io5'

interface ListLink {
  href: string
  text: string
  activeIcon: IconType
  inactiveIcon: IconType
}

const LINKS: ListLink[] = [
  {
    href: '/about',
    text: 'About',
    activeIcon: IoPerson,
    inactiveIcon: IoPersonOutline
  },
  {
    href: '/tools',
    text: 'Tools',
    activeIcon: IoConstruct,
    inactiveIcon: IoConstructOutline
  },
  {
    href: '/projects',
    text: 'Projets',
    activeIcon: IoSparkles,
    inactiveIcon: IoSparklesOutline
  }
]

export default LINKS
