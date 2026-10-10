export interface ExperienceLink {
  label: string
  url: string
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  location?: string
  summary: string
  highlights?: string[]
  description?: string
  technologies?: string[]
  skills?: string[]
  links?: ExperienceLink[]
  embedUrl?: string
}

