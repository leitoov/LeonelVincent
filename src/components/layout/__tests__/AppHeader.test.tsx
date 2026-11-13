import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
  it('renders brand identity and primary navigation links', () => {
    render(<AppHeader />)

    expect(screen.getByText('LV')).toBeInTheDocument()
    expect(screen.getByText('Leonel Vincent')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hablemos/i })).toHaveAttribute('href', '#contacto')
  })

  it('scrolls smoothly to sections without mutating hash routes', async () => {
    const user = userEvent.setup()
    const scrollIntoView = vi.fn()
    const target = document.createElement('section')
    target.id = 'areas'
    target.scrollIntoView = scrollIntoView
    document.body.appendChild(target)

    render(<AppHeader />)
    await user.click(screen.getByRole('link', { name: 'Áreas' }))

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
    expect(window.location.hash).toBe('')

    document.body.removeChild(target)
  })

  it('toggles mobile navigation drawer and closes it when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<AppHeader />)

    const toggleButton = screen.getByRole('button', { name: 'Abrir menú' })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Navegación móvil' })).not.toBeInTheDocument()

    await user.click(toggleButton)
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    const mobileNav = screen.getByRole('navigation', { name: 'Navegación móvil' })
    expect(mobileNav).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Contacto' }))
    expect(screen.queryByRole('navigation', { name: 'Navegación móvil' })).not.toBeInTheDocument()
  })
})

