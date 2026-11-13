import type { ReactNode } from 'react'

interface AppFooterProps {
  extra?: ReactNode
}

export default function AppFooter({ extra }: AppFooterProps) {
  return (
    <footer className="w-full border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="flex w-full flex-nowrap items-center justify-between gap-3 px-6 py-4 text-sm text-slate-600">
        <span>© {new Date().getFullYear()} Leonel Vincent</span>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>Desarrollador | Coordinador IT</span>
          {extra}
        </div>
      </div>
    </footer>
  )
}

