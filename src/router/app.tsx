import { lazy } from 'react'

const Home = lazy(() => import('@/pages/index'))
const Contact = lazy(() => import('@/pages/contact'))
export default [{
  path: '/',
  element: <Home />
}, {
  path: '/contact',
  element: <Contact />
}]
