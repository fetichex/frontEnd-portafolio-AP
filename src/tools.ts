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
  {
    href: '/Diego_Cano_Full-Stack-Developer.pdf',
    text: 'Resume',
    download: '/Diego_Cano_Full-Stack-Developer.pdf',
    icon: IoDownload
  }
]

export const PROJECTS: Project[] = [
  {
    id: 2,
    description:
      'PadelApp is a web application that seeks to facilitate the process of renting a paddle tennis court for users. In this project we achieved:-Register/manage users - players -Register/manage users - Owners -register/manage super-User -Register/manage the paddle courts Dashboard for owners and super-users -payment gateway',
    tech: [
      'React js',
      'Redux ToolKit',
      'Chakra-ui',
      'Node.js',
      'Express',
      'Mongoose',
      'MongoDB',
      'Auth0'
    ],
    title: 'Padelapp',
    href: 'https://padelapp.netlify.app/',
    image: '/padelapp.png'
  },
  {
    id: 1,
    description:
      'The idea when creating this application was to list culinary recipes with just their relevant information using the external API of spoonacular to - Create recipes - Search recipes - Filter/sort',
    tech: [
      'React',
      'Redux',
      'Styled-Component',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL'
    ],
    title: 'Culinarify',
    href: 'https://culinarifyf.onrender.com/',
    image: '/culinarify.png'
  }
]
