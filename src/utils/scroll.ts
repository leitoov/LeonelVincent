import type { MouseEvent } from 'react'

export function scrollToSection(sectionId: string, onAfter?: () => void) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.getElementById(sectionId)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onAfter?.()
  }
}

