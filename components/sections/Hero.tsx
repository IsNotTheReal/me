import { useTranslations } from 'next-intl'
import { pick } from '@/data'
import type { Profile, Locale } from '@/types'

export default function Hero({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = useTranslations('hero')

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="section-wrap pt-10 sm:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gray3">
            <span className="h-1.5 w-1.5 rounded-full bg-gray3" />
            {pick(profile.location, locale)}
          </div>

          <h1 className="font-sf text-hero font-semibold tracking-[-0.07em] text-gray1">
            {profile.name}
          </h1>

          <p className="mt-4 font-sf text-display font-semibold tracking-[-0.05em] text-gray2">
            {pick(profile.title, locale)}
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-text text-[19px] leading-relaxed text-gray2 sm:text-[21px]">
            {pick(profile.tagline, locale)}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-pill">
              {t('cta_contact')}
            </a>
            <a href="#experience" className="btn-pill-outline">
              {t('cta_projects')}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="stat-card">
              <p className="font-text text-[11px] uppercase tracking-[0.18em] text-gray3">{t('stats_experience')}</p>
              <p className="mt-4 font-sf text-4xl font-semibold tracking-[-0.05em] text-gray1">4</p>
            </div>
            <div className="stat-card">
              <p className="font-text text-[11px] uppercase tracking-[0.18em] text-gray3">{t('stats_tech')}</p>
              <p className="mt-4 font-sf text-4xl font-semibold tracking-[-0.05em] text-gray1">20+</p>
            </div>
            <div className="stat-card">
              <p className="font-text text-[11px] uppercase tracking-[0.18em] text-gray3">{t('stats_languages')}</p>
              <p className="mt-4 font-sf text-4xl font-semibold tracking-[-0.05em] text-gray1">5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
