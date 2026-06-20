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
    <section id="education" className="bg-black hairline-divider">
      <div className="section-wrap-wide">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="headline mb-16">{t('heading')}</h2>
        </ScrollReveal>

        {/* Degrees — Apple's three-up feature grid, cards stagger in by position */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {items.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={i * 100}>
              <div className="panel text-center">
                <p className="font-text text-[13px] text-accent mb-3">{pick(edu.degree, locale)}</p>
                <h3 className="font-sf text-lg font-semibold text-gray1 leading-snug mb-2">
                  {pick(edu.field, locale)}
                </h3>
                <p className="font-text text-[14px] text-gray2 mb-1">{edu.institution}</p>
                <p className="font-text text-[13px] text-gray3">
                  {formatDateRange(edu.start, edu.end, locale)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certification + LinkedIn — lightweight closing line, no longer a full subsection */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center border-t border-hairline2 pt-10">
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
