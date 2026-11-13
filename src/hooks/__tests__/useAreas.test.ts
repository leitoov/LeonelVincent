import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useAreas } from '../useAreas'

describe('useAreas', () => {
  it('defaults to producto as the initial active area', () => {
    const { result } = renderHook(() => useAreas())

    expect(result.current.activeAreaId).toBe('producto')
    expect(result.current.activeArea.id).toBe('producto')
    expect(result.current.areas).toHaveLength(3)
  })

  it('switches activeArea when setActiveAreaId is called', () => {
    const { result } = renderHook(() => useAreas())

    act(() => {
      result.current.setActiveAreaId('gestion')
    })
    expect(result.current.activeAreaId).toBe('gestion')
    expect(result.current.activeArea.label).toBe('Gestión')

    act(() => {
      result.current.setActiveAreaId('desarrollo')
    })
    expect(result.current.activeAreaId).toBe('desarrollo')
    expect(result.current.activeArea.label).toBe('Desarrollo')
  })
})

