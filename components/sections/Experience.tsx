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
    <section id="experience" className="hairline-divider bg-surface">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-16">{t('heading')}</h2>
        </ScrollReveal>

        <div className="space-y-10">
          {items.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 60}>
              <article className="relative grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="relative md:pt-4">
                  <div className="mb-3 inline-flex border-b border-hairline px-0 py-1.5 font-text text-[11px] uppercase tracking-[0.14em] text-gray3">
                    {formatDateRange(exp.start, exp.end, locale)}
                  </div>
                  <h3 className="font-sf text-2xl font-semibold tracking-[-0.05em] text-gray1 sm:text-[2rem]">
                    {exp.company}
                  </h3>
                  <p className="mt-3 font-text text-[13px] text-gray3">
                    {getDuration(exp.start, exp.end, locale)} · {pick(exp.location, locale)}
                  </p>
                </div>

                <div className="panel relative">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-sf text-xl font-semibold text-gray1 sm:text-[1.6rem]">
                        {pick(exp.role, locale)}
                      </h4>
                      <p className="mt-2 font-text text-[12px] uppercase tracking-[0.14em] text-gray3">
                        {t(`type_${exp.type}` as 'type_internship')}
                      </p>
                    </div>
                  </div>

                  <p className="font-text text-[16px] leading-relaxed text-gray2">
                    {pick(exp.summary, locale)}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 font-text text-[15px] leading-relaxed text-gray1">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray3" />
                        <span className="text-gray2">{pick(h, locale)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
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
