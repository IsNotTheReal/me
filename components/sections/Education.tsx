import { useTranslations } from 'next-intl'
import { formatDateRange, pick } from '@/data'
import type { Education, Locale } from '@/types'

const LANGUAGE_ROWS = (locale: Locale) => [
  { lang: 'Galego / Castellano', level: locale === 'es' ? 'Nativo' : 'Native', score: 5 },
  { lang: 'English', level: 'C1', score: 4 },
  { lang: 'Deutsch', level: 'A1', score: 1 },
]

export default function EducationSection({
  items,
  locale,
}: {
  items: Education[]
  locale: Locale
}) {
  const t = useTranslations('education')

  return (
    <section id="education" className="border-b border-line">
      <div className="section-wrap">
        <div className="ref-mark">{t('label')}</div>
        <div className="ledger-rule" />

        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-14">
          {t('heading')}
        </h2>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-12">
          {/* Degrees — a flat table, not cards-with-icons */}
          <div>
            <h3 className="font-data text-[10px] tracking-widest text-inkDim uppercase mb-5">
              {t('degrees')}
            </h3>
            <div className="border-t border-line">
              {items.map((edu) => (
                <div key={edu.id} className="py-5 border-b border-line">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="font-display text-lg text-paper leading-snug">
                      {pick(edu.field, locale)}
                    </h4>
                    <span className="stamp-tag shrink-0">{pick(edu.degree, locale)}</span>
                  </div>
                  <p className="text-rust text-sm mb-2">{edu.institution}</p>
                  <p className="font-data text-[11px] text-inkDim mb-3">
                    {formatDateRange(edu.start, edu.end, locale)} · {edu.location}
                  </p>
                  {edu.highlights && (
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 text-[13px] text-ink leading-relaxed">
                          <span className="text-rust shrink-0">—</span>
                          {pick(h, locale)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications + languages */}
          <div>
            <h3 className="font-data text-[10px] tracking-widest text-inkDim uppercase mb-5">
              {t('certs')}
            </h3>

            <div className="plate mb-6">
              <h4 className="font-data text-[10px] tracking-widest text-inkDim uppercase mb-4">
                {locale === 'es' ? 'Idiomas' : 'Languages'}
              </h4>
              <div className="space-y-3">
                {LANGUAGE_ROWS(locale).map((l) => (
                  <div key={l.lang} className="flex items-center justify-between">
                    <span className="text-[13px] text-paper2">{l.lang}</span>
                    <div className="flex items-center gap-2.5">
                      <span className="font-data text-[10px] text-inkDim">{l.level}</span>
                      <span className="dot-row">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span key={n} className={n <= l.score ? 'dot-filled' : 'dot'} />
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/alexandre-mayo-esteiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-dashed border-line2 hover:border-rust transition-colors text-center py-3 text-sm text-inkDim hover:text-rust"
            >
              {t('view_linkedin')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
