import type { ReactNode } from 'react'

interface AppHeaderProps {
  actions?: ReactNode
}

export default function AppHeader({ actions }: AppHeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="flex w-full flex-nowrap items-center justify-between gap-3 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white">LV</div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Leonel Vincent</p>
            <p className="text-xs text-slate-500">Desarrollador | Team - Teach Lead</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          {actions}
        </div>
      </div>
    </header>
  )
}

