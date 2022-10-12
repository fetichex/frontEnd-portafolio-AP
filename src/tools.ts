import { IoLogoGithub, IoLogoLinkedin, IoDownload } from 'react-icons/io5'
import Hero from './react-components/Hero'
import About from './react-components/About'
import Projects from './react-components/Projects'
import { TypeRoute, TypeLink, Project } from './interfaces'

export const ROUTES: TypeRoute[] = [
  { path: '/', component: Hero },
  { path: '/about', component: About },
  { path: '/projects', component: Projects }
]

export const SECTIONS: TypeLink[] = [
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/projects',
    text: 'Projects'
  }
]

export const EXTERNAL_LINK: TypeLink[] = [
  { href: 'https://github.com/fetichex', text: 'GitHub', icon: IoLogoGithub },
  {
    href: 'https://www.linkedin.com/in/diegocano-fullstackdeveloper/',
    text: 'LinkedIn',
    icon: IoLogoLinkedin
  },
  { href: '/Diego_Cano_Full-Stack-Developer.pdf', text: 'Resume', download: '/Diego_Cano_Full-Stack-Developer.pdf', icon: IoDownload }
]

export const PROJECTS: Project[] = [
  { id: 3, description: '', title: 'flaminCode', href: '', image: '' },
  { id: 4, description: '', title: 'other', href: '', image: '' },
  { id: 2, description: '', title: 'Padelapp', href: '', image: '' },
  { id: 1, description: '', title: 'Culinarify', href: '', image: '' }
]
