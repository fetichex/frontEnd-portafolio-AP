import {
  IoPerson,
  IoSparkles,
  IoConstruct,
  IoPersonOutline,
  IoSparklesOutline,
  IoConstructOutline,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import Hero from './react-components/Hero'
import About from './react-components/About'
import Tools from './react-components/Tools'
import Projects from './react-components/Projects'
import { TypeRoute, TypeLink } from './interfaces'

export const ROUTES: TypeRoute[] = [
  { path: '/', component: Hero },
  { path: '/about', component: About },
  { path: '/tools', component: Tools },
  { path: '/projects', component: Projects }
]

export const SECTIONS: TypeLink[] = [
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
    text: 'Projects',
    activeIcon: IoSparkles,
    inactiveIcon: IoSparklesOutline
  }
]

export const EXTERNAL_LINK: TypeLink[] = [
  { href: 'https://github.com/fetichex', text: 'GitHub', icon: IoLogoGithub },
  {
    href: 'https://www.linkedin.com/in/diegocano-fullstackdeveloper/',
    text: 'LinkedIn',
    icon: IoLogoLinkedin
  }
]
