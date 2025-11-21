import experiences from '../constants/experience.json'
import type { Experience } from '../types/experience'

export function getExperiences(): Experience[] {
  return experiences
}
