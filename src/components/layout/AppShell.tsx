import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

interface AppShellProps {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0d0c] text-[#f2f3ee]">
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  )
}
