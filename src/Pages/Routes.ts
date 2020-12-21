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
    title: 'Главная',
    component: Home,
  },
  {
    link: '/tests',
    title: 'Тесты',
    component: Tests,
  },
]