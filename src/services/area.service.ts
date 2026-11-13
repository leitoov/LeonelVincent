import areasData from '../constants/areas.json'
import { getExperiences } from './experience.service'
import type { AreaDefinition, AreaWithExperiences } from '../types/area'

export function getAreas(): AreaWithExperiences[] {
  const experiences = getExperiences()
  const experienceMap = new Map(experiences.map((exp) => [exp.id, exp]))

  return (areasData as AreaDefinition[]).map((area) => ({
    ...area,
    experiences: area.experiences
      .map((entry) => {
        const experience = experienceMap.get(entry.experienceId)
        if (!experience) return null
        return {
          ...entry,
          experience,
        }
      })
      .filter((item): item is NonNullable<typeof item> => item !== null),
  }))
}

