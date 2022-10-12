import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface TypeChildren {
  children: JSX.Element | ReactNode
}

export interface TypeRoute {
  path: string
  component: () => JSX.Element
}

export interface TypeLink {
  href: string
  text: string
  download?: string
  icon?: IconType
  activeIcon?: IconType
  inactiveIcon?: IconType
}

export interface Project {
  id: number
  title: string
  href: string
  description: string
  image: string
}
