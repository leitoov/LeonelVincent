import { computed } from 'vue'
import { getExperiences } from '../services/experience.service'

const experiences = getExperiences()

export function useExperience() {
  return {
    experiences: computed(() => experiences),
  }
}
