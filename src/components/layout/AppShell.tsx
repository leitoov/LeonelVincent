import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import { scrollToSection } from '../../utils/scroll'

interface AppShellProps {
  children: ReactNode
}

const MOBILE_DOCK_ITEMS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'areas', label: 'Áreas' },
  { id: 'formacion', label: 'Estudios' },
  { id: 'contacto', label: 'Contacto' },
]

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0b0d0c] text-[#f2f3ee]">
      <AppHeader />
      <main>{children}</main>
      <AppFooter />

      {/* Barra flotante inferior exclusiva para mobile */}
      <nav
        aria-label="Navegación rápida móvil"
        className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-[#101310]/90 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl md:hidden"
      >
        {MOBILE_DOCK_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={scrollToSection(item.id)}
            className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition ${
              item.id === 'contacto'
                ? 'bg-[#c8ff3d] text-[#0b0d0c]'
                : 'text-white/75 hover:bg-white/10 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
