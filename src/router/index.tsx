import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import RouteErrorFallback from '../components/common/RouteErrorFallback'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteErrorFallback />,
  },
  {
    path: '*',
    element: <Home />,
    errorElement: <RouteErrorFallback />,
  },
])

export default router
