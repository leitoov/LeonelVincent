import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import Home from '../Home'

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

describe('Home integration', () => {
  it('renders hero presentation and defaults to the Producto area tab', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Construyo sistemas\.\s*Impulso equipos\./i
    )

    const tablist = screen.getByRole('tablist', { name: 'Áreas profesionales' })
    const productoTab = within(tablist).getByRole('tab', { name: /Producto/i })
    const gestionTab = within(tablist).getByRole('tab', { name: /Gestión/i })
    const desarrolloTab = within(tablist).getByRole('tab', { name: /Desarrollo/i })

    expect(productoTab).toHaveAttribute('aria-selected', 'true')
    expect(gestionTab).toHaveAttribute('aria-selected', 'false')
    expect(desarrolloTab).toHaveAttribute('aria-selected', 'false')

    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      'Visión de Producto, Negocio y Experiencia'
    )
  })

  it('switches area tabs and displays all area-specific experiences at once', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const tablist = screen.getByRole('tablist', { name: 'Áreas profesionales' })
    const gestionTab = within(tablist).getByRole('tab', { name: /Gestión/i })

    await user.click(gestionTab)

    expect(gestionTab).toHaveAttribute('aria-selected', 'true')
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent('Liderazgo Técnico, Agilidad y Soporte')
    expect(panel).toHaveTextContent('Experiencia en Gestión')
    expect(panel).toHaveTextContent('Stefanini (CVC)')
    expect(panel).toHaveTextContent('Famiq')
    expect(panel).toHaveTextContent('Senior Software Engineer | Tech Lead soporte')
    expect(panel).toHaveTextContent('SatoshiTango')
  })

  it('navigates to the corresponding area tab when clicking a capability card in section 01', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const desarrolloCard = screen.getByRole('button', {
      name: /03\s+Desarrollo/i,
    })
    await user.click(desarrolloCard)

    const tablist = screen.getByRole('tablist', { name: 'Áreas profesionales' })
    expect(within(tablist).getByRole('tab', { name: /Desarrollo/i })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      'Arquitectura, Microservicios e IA Generativa'
    )
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('filters education items by category in section 03', async () => {
    const user = userEvent.setup()
    render(<Home />)

    expect(
      screen.getByText('Certificado Profesional de IBM Generative AI Engineering')
    ).toBeInTheDocument()
    expect(screen.getByText('Técnico en Programación')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'carrera' }))

    expect(screen.getByText('Técnico en Programación')).toBeInTheDocument()
    expect(
      screen.queryByText('Certificado Profesional de IBM Generative AI Engineering')
    ).not.toBeInTheDocument()
  })
})

