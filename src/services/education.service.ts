import rawEducation from '../constants/education.json'
import type { EducationItem } from '../types/education'

const education = rawEducation as EducationItem[]

export function getEducation(): EducationItem[] {
  return education
}
