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
    <section id="skills" className="bg-black hairline-divider">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-14">{t('heading')}</h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          {/* Apple's tab-strip pattern, like their "Compare" nav (Design / Camera / Chip...) */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14 border-b border-hairline2 pb-px">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`font-text text-[15px] pb-4 border-b-2 transition-colors ${
                  active === cat.id
                    ? 'text-gray1 border-accent'
                    : 'text-gray3 border-transparent hover:text-gray2'
                }`}
              >
                {pick(cat.label, locale)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech-spec table — Apple's actual spec sheet typography */}
        {current && (
          <ScrollReveal delay={220}>
            <div className="max-w-2xl mx-auto divide-y divide-hairline2">
              {current.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between py-4">
                  <span className="font-text text-[17px] text-gray1">{skill.name}</span>
                  <span className="font-text text-[13px] text-gray3">
                    {LEVEL_LABEL_SHORT[skill.level]}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
