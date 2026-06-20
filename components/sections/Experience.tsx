import { useTranslations } from 'next-intl'
import { formatDateRange, getDuration, pick } from '@/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Experience, Locale } from '@/types'

export default function ExperienceSection({
  items,
  locale,
}: {
  items: Experience[]
  locale: Locale
}) {
  const t = useTranslations('experience')

  return (
    <section id="experience" className="bg-black hairline-divider">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-16">{t('heading')}</h2>
        </ScrollReveal>

        <div className="space-y-20">
          {items.map((exp) => (
            <ScrollReveal key={exp.id}>
              <article className="grid md:grid-cols-[280px,1fr] gap-8 md:gap-16 items-start">
                {/* Left column — Apple's "spec sheet" side, big and quiet */}
                <div className="md:sticky md:top-32">
                  <h3 className="font-sf text-2xl sm:text-3xl font-semibold text-gray1 leading-tight">
                    {exp.company}
                  </h3>
                  <p className="font-text text-[15px] text-gray2 mt-2">
                    {formatDateRange(exp.start, exp.end, locale)}
                  </p>
                  <p className="font-text text-[13px] text-gray3 mt-1">
                    {getDuration(exp.start, exp.end, locale)} · {exp.location}
                  </p>
                </div>

                {/* Right column — the content panel */}
                <div className="panel">
                  <h4 className="font-sf text-xl font-semibold text-gray1 mb-1">
                    {pick(exp.role, locale)}
                  </h4>
                  <p className="font-text text-[13px] text-accent mb-5">
                    {t(`type_${exp.type}` as 'type_internship')}
                  </p>

                  <p className="font-text text-[16px] text-gray2 leading-relaxed mb-6">
                    {pick(exp.summary, locale)}
                  </p>

                  <ul className="space-y-3 mb-7">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 font-text text-[15px] text-gray1 leading-relaxed">
                        <span className="text-accent shrink-0 mt-0.5">＋</span>
                        {pick(h, locale)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="spec-chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
