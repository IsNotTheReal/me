// ================================================================
// PORTFOLIO DATA MODEL
// To add/edit content, update /data/*.ts — no component changes.
// ================================================================

export type Locale = 'en' | 'es'

export interface LocalizedString {
  en: string
  es: string
}

export interface Profile {
  name: string
  title: LocalizedString
  tagline: LocalizedString
  bio: LocalizedString
  location: string
  email: string
  availability: 'open' | 'limited' | 'closed'
  links: {
    github: string
    linkedin: string
    cv?: string
  }
}

export interface Experience {
  id: string
  company: string
  role: LocalizedString
  type: 'internship' | 'fulltime' | 'contract' | 'freelance'
  start: string   // YYYY-MM
  end: string | null
  location: string
  summary: LocalizedString
  highlights: LocalizedString[]
  tags: string[]
}

export interface Education {
  id: string
  institution: string
  degree: LocalizedString
  field: LocalizedString
  start: string
  end: string | null
  location: string
  highlights?: LocalizedString[]
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  label: LocalizedString
  skills: Skill[]
}

export interface Project {
  id: string
  name: string
  description: LocalizedString
  tags: string[]
  status: 'active' | 'wip' | 'archived'
  links: { github?: string; live?: string }
  featured: boolean
}
