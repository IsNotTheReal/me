'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { pick } from '@/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { SkillCategory, Locale } from '@/types'

const LEVEL_LABEL_SHORT: Record<number, string> = {
  1: 'Basic', 2: 'Basic', 3: 'Proficient', 4: 'Advanced', 5: 'Expert',
}

export default function Skills({
  categories,
  locale,
}: {
  categories: SkillCategory[]
  locale: Locale
}) {
  const t = useTranslations('skills')
  const [active, setActive] = useState<string>(categories[0]?.id ?? '')

  const current = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section id="skills" className="hairline-divider bg-white">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-14">{t('heading')}</h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full border px-4 py-2.5 font-text text-[12px] uppercase tracking-[0.14em] transition-all ${
                  active === cat.id
                    ? 'border-gray1 bg-gray1 text-white'
                    : 'border-hairline2 bg-white text-gray3 hover:border-gray3 hover:text-gray1'
                }`}
              >
                {pick(cat.label, locale)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {current && (
          <ScrollReveal delay={220}>
            <div className="mx-auto max-w-3xl space-y-3">
              {current.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-6 border-b border-hairline2 px-1 py-4 sm:px-2"
                >
                  <span className="font-text text-[17px] text-gray1">{skill.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-24 overflow-hidden bg-hairline2 sm:w-28">
                      <div
                        className="h-full bg-gray1"
                        style={{ width: `${skill.level * 20}%` }}
                      />
                    </div>
                    <span className="font-text text-[11px] uppercase tracking-[0.14em] text-gray3">
                      {LEVEL_LABEL_SHORT[skill.level]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
