'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useInView } from '@/lib/useInView'
import { pick } from '@/data'
import type { SkillCategory, Locale, SkillLevel } from '@/types'

const LEVEL_KEYS = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'] as const

export default function Skills({
  categories,
  locale,
}: {
  categories: SkillCategory[]
  locale: Locale
}) {
  const t = useTranslations('skills')
  const [active, setActive] = useState<string>('all')

  const shown = active === 'all' ? categories : categories.filter((c) => c.id === active)

  return (
    <section id="skills" className="border-b border-line">
      <div className="section-wrap">
        <div className="ref-mark">{t('label')}</div>
        <div className="ledger-rule" />

        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-8">
          {t('heading')}
        </h2>

        <div className="flex flex-wrap gap-2 mb-12">
          <FilterTab label={t('filter_all')} active={active === 'all'} onClick={() => setActive('all')} />
          {categories.map((cat) => (
            <FilterTab
              key={cat.id}
              label={pick(cat.label, locale)}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {shown.map((cat) => (
            <SkillCard key={cat.id} category={cat} locale={locale} tLevel={(k) => t(k)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FilterTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`font-data text-[10px] tracking-wider px-3 py-1.5 border transition-colors duration-150 uppercase ${
        active
          ? 'border-rust bg-rust/10 text-rust'
          : 'border-line text-inkDim hover:border-line2 hover:text-ink'
      }`}
    >
      {label}
    </button>
  )
}

function SkillCard({
  category,
  locale,
  tLevel,
}: {
  category: SkillCategory
  locale: Locale
  tLevel: (k: (typeof LEVEL_KEYS)[number]) => string
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="plate">
      <h3 className="font-data text-[10px] tracking-widest uppercase mb-5 text-paper2 pb-3 border-b border-line">
        {pick(category.label, locale)}
      </h3>

      <ul className="space-y-3.5">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <span className="text-[13.5px] text-paper2">{skill.name}</span>
            <ProficiencyDots level={skill.level} active={inView} label={tLevel(LEVEL_KEYS[skill.level - 1])} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProficiencyDots({
  level,
  active,
  label,
}: {
  level: SkillLevel
  active: boolean
  label: string
}) {
  return (
    <span className="dot-row" title={label} aria-label={label}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={n <= level && active ? 'dot-filled' : 'dot'}
          style={{ transitionDelay: `${n * 60}ms`, transition: 'background-color 0.3s ease' }}
        />
      ))}
    </span>
  )
}
