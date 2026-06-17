import { useTranslations } from 'next-intl'
import { MapPin } from 'lucide-react'
import { formatDateRange, getDuration, pick } from '@/data'
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
    <section id="experience" className="border-b border-line">
      <div className="section-wrap">
        <div className="ref-mark">{t('label')}</div>
        <div className="ledger-rule" />

        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-14">
          {t('heading')}
        </h2>

        <div className="space-y-12">
          {items.map((exp, i) => (
            <article key={exp.id} className="grid sm:grid-cols-[3rem,1fr] gap-4 sm:gap-8">
              {/* Entry index, like a logbook page number */}
              <div className="hidden sm:block">
                <span className="idx-number">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <div className="border-t border-line pt-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-xl text-paper leading-tight">
                      {pick(exp.role, locale)}
                    </h3>
                    <p className="text-rust text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="shrink-0 text-right font-data text-[11px] text-inkDim">
                    <div>{formatDateRange(exp.start, exp.end, locale)}</div>
                    <div className="mt-0.5">{getDuration(exp.start, exp.end, locale)}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="stamp-tag">{t(`type_${exp.type}` as 'type_internship')}</span>
                  <span className="flex items-center gap-1.5 font-data text-[11px] text-inkDim">
                    <MapPin size={11} /> {exp.location}
                  </span>
                </div>

                <p className="text-ink text-sm leading-relaxed mb-5">
                  {pick(exp.summary, locale)}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-[13.5px] text-paper2 leading-relaxed">
                      <span className="text-rust shrink-0">—</span>
                      {pick(h, locale)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="stamp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
