import { useMemo, useState } from 'react'
import { getEducation } from '../services/education.service'
import type { EducationItem } from '../types/education'

const allEducation = getEducation()
const categories = ['all', 'carrera', 'certificacion', 'curso'] as const

export function useEducation() {
  const [activeCategory, setActiveCategory] = useState<'all' | EducationItem['category']>('all')

  const items = useMemo(
    () =>
      activeCategory === 'all'
        ? allEducation
        : allEducation.filter((item) => item.category === activeCategory),
    [activeCategory]
  )

  return {
    categories,
    items,
    activeCategory,
    setCategory: setActiveCategory,
  }
}
