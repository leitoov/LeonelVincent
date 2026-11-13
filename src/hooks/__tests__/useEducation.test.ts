import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useEducation } from '../useEducation'

describe('useEducation', () => {
  it('starts with "all" selected and exposes expected categories', () => {
    const { result } = renderHook(() => useEducation())

    expect(result.current.activeCategory).toBe('all')
    expect(result.current.categories).toEqual(['all', 'carrera', 'certificacion', 'curso'])
    expect(result.current.items.length).toBeGreaterThan(0)
  })

  it('filters education items by category and restores all when set back to "all"', () => {
    const { result } = renderHook(() => useEducation())
    const totalCount = result.current.items.length

    act(() => {
      result.current.setCategory('carrera')
    })

    expect(result.current.activeCategory).toBe('carrera')
    expect(result.current.items.length).toBeGreaterThan(0)
    expect(result.current.items.length).toBeLessThan(totalCount)
    expect(result.current.items.every((item) => item.category === 'carrera')).toBe(true)

    act(() => {
      result.current.setCategory('all')
    })
    expect(result.current.items.length).toBe(totalCount)
  })
})

