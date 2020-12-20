import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Home } from 'Pages/Home'
import { Tests } from 'Pages/Tests'

interface Route {
  link: string
  title: string
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

export const Pages: Array<Route> = [
  {
    link: '/',
    title: 'Home',
    component: Home,
  },
  {
    link: '/tests',
    title: 'Tests',
    component: Tests,
  },
]