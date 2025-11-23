import { computed, ref } from 'vue'
import { getEducation } from '../services/education.service'
import type { EducationItem } from '../types/education'

const allEducation = getEducation()
const activeCategory = ref<'all' | EducationItem['category']>('all')

export function useEducation() {
  const categories = computed(() => ['all', 'carrera', 'certificacion', 'curso'] as const)
  const items = computed(() =>
    activeCategory.value === 'all'
      ? allEducation
      : allEducation.filter((item) => item.category === activeCategory.value)
  )

  const setCategory = (category: 'all' | EducationItem['category']) => {
    activeCategory.value = category
  }

  return {
    categories,
    items,
    activeCategory,
    setCategory,
  }
}
