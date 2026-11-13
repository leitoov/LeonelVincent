import { useState } from 'react'
import Icon from '../common/Icon'
import { scrollToSection } from '../../utils/scroll'

const NAV_ITEMS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'areas', label: 'Áreas' },
  { id: 'formacion', label: 'Formación' },
]

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={scrollToSection('inicio', closeMenu)}
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#c8ff3d] text-sm font-black text-[#0b0d0c] transition-transform group-hover:rotate-6">
            LV
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-[#f2f3ee]">
            Leonel Vincent
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm text-white/60 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={`#${item.id}`}
              onClick={scrollToSection(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button-small"
            href="#contacto"
            onClick={scrollToSection('contacto')}
          >
            Hablemos <Icon name="arrow" className="size-4" />
          </a>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/15 text-[#f2f3ee] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="flex flex-col border-t border-white/10 bg-[#0b0d0c] px-6 py-6 text-lg text-[#f2f3ee] md:hidden"
          aria-label="Navegación móvil"
        >
          {[...NAV_ITEMS, { id: 'contacto', label: 'Contacto' }].map((item) => (
            <a
              key={item.id}
              className="border-b border-white/10 py-4"
              href={`#${item.id}`}
              onClick={scrollToSection(item.id, closeMenu)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
