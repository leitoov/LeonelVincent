import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
  it('renders brand identity and primary navigation links', () => {
    render(<AppHeader />)

    expect(screen.getByText('LV')).toBeInTheDocument()
    expect(screen.getByText('Leonel Vincent')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hablemos/i })).toHaveAttribute('href', '#contacto')
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

