import { getExperiences } from '../services/experience.service'

const experiences = getExperiences()

export function useExperience() {
  return {
    experiences,
  }
}
