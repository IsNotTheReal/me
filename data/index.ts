export { profile } from './profile'
export { experience } from './experience'
export { education } from './education'
export { skillCategories } from './skills'

import type { LocalizedString, Locale } from '@/types'

// ---------------------------------------------------------------
// Localization helper — eliminates `locale === 'es' ? x.es : x.en`
// repeated across every section component.
// ---------------------------------------------------------------
export function pick(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.en
}

// ---------------------------------------------------------------
// Date utilities
// ---------------------------------------------------------------
export function formatDateRange(
  start: string,
  end: string | null,
  locale: 'en' | 'es'
): string {
  const fmt = (d: string) => {
    const [year, month] = d.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-GB', {
      month: 'short',
      year: 'numeric',
    })
  }
  const endLabel = locale === 'es' ? 'Presente' : 'Present'
  return `${fmt(start)} – ${end ? fmt(end) : endLabel}`
}

export function getDuration(start: string, end: string | null, locale: 'en' | 'es'): string {
  const s = new Date(start + '-01')
  const e = end ? new Date(end + '-01') : new Date()
  const months = Math.max(
    1,
    Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24 * 30.44))
  )
  if (months < 12) {
    return locale === 'es' ? `${months} mes${months !== 1 ? 'es' : ''}` : `${months} mo`
  }
  const y = Math.floor(months / 12)
  const m = months % 12
  if (locale === 'es') {
    return m > 0 ? `${y} año${y > 1 ? 's' : ''} ${m} mes${m > 1 ? 'es' : ''}` : `${y} año${y > 1 ? 's' : ''}`
  }
  return m > 0 ? `${y}y ${m}mo` : `${y}y`
}
