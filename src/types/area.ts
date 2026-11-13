import type { Experience } from './experience'

export type AreaId = 'producto' | 'gestion' | 'desarrollo'

export interface AreaExperienceEntry {
  experienceId: string
  areaRole?: string
  focus: string
  highlights: string[]
  showEmbed?: boolean
}

export interface AreaDefinition {
  id: AreaId
  label: string
  eyebrow: string
  title: string
  description: string
  pillars: string[]
  tools: string[]
  experiences: AreaExperienceEntry[]
}

export interface ResolvedAreaExperience {
  experience: Experience
  areaRole?: string
  focus: string
  highlights: string[]
  showEmbed?: boolean
}

export interface AreaWithExperiences extends Omit<AreaDefinition, 'experiences'> {
  experiences: ResolvedAreaExperience[]
}

