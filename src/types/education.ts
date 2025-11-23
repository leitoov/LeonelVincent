export interface EducationItem {
  id: string
  title: string
  institution: string
  year: string
  category: 'carrera' | 'certificacion' | 'curso'
  details?: string
  skills?: string[]
  link?: string
}
