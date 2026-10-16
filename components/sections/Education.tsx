import { useTranslations } from 'next-intl'
import { formatDateRange, pick } from '@/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Education, Locale } from '@/types'

export default function EducationSection({
  items,
  locale,
}: {
  items: Education[]
  locale: Locale
}) {
  const t = useTranslations('education')

  return (
    <section id="education" className="hairline-divider bg-surface">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-16">{t('heading')}</h2>
        </ScrollReveal>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {items.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={i * 100}>
              <div className="panel h-full text-left">
                <p className="font-text text-[11px] uppercase tracking-[0.18em] text-accent">{pick(edu.degree, locale)}</p>
                <h3 className="mt-4 font-sf text-[1.5rem] font-semibold leading-tight text-gray1">
                  {pick(edu.field, locale)}
                </h3>
                <p className="mt-4 font-text text-[15px] text-gray2">{edu.institution}</p>
                <p className="mt-2 font-text text-[13px] text-gray3">{formatDateRange(edu.start, edu.end, locale)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex items-center justify-center pt-4">
            <a
              href="https://www.linkedin.com/in/alexandre-mayo-esteiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-chevron"
            >
              {t('view_linkedin')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
