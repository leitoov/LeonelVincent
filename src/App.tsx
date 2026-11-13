import { RouterProvider } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import router from './router'

export default function App() {
  return (
    <AppShell>
      <RouterProvider router={router} />
    </AppShell>
  )
}

