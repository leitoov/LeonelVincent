import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

interface AppShellProps {
  children: ReactNode
  headerActions?: ReactNode
  footerExtra?: ReactNode
}

export default function AppShell({ children, headerActions, footerExtra }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <AppHeader actions={headerActions} />

      <main className="flex-1 w-full">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="md:p-10">
            {children}
          </div>
        </div>
      </main>

      <AppFooter extra={footerExtra} />
    </div>
  )
}

