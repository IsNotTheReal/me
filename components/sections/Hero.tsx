import { useTranslations } from 'next-intl'
import { pick } from '@/data'
import type { Profile, Locale } from '@/types'

export default function Hero({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = useTranslations('hero')

  return (
    <section id="hero" className="relative bg-black">
      <div className="max-w-[980px] mx-auto px-6 pt-40 sm:pt-48 pb-24 text-center">
        {/* Eyebrow — Apple always names the "product line" above the headline */}
        <p className="eyebrow">{profile.location}</p>

        {/* The headline — this IS the design. No icon, no terminal, no gimmick. */}
        <h1 className="font-sf text-hero font-semibold text-gray1">
          {profile.name}
        </h1>

        <p className="font-sf text-display font-semibold text-gray2 mt-2">
          {pick(profile.title, locale)}
        </p>

        <p className="font-text text-[19px] sm:text-[21px] text-gray2 max-w-2xl mx-auto mt-6 leading-relaxed">
          {pick(profile.tagline, locale)}
        </p>

        {/* Apple's link-pair pattern: "Buy" / "Learn more" */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <a href="#contact" className="text-accent font-text text-[19px] hover:underline">
            {t('cta_contact')} <span aria-hidden>›</span>
          </a>
          <a href="#experience" className="text-accent font-text text-[19px] hover:underline">
            {t('cta_projects')} <span aria-hidden>›</span>
          </a>
        </div>
      </div>

      {/* Apple's spec strip — three huge numbers, centered, the visual climax of the hero */}
      <div className="border-t border-hairline2">
        <div className="max-w-[980px] mx-auto px-6 py-14 grid grid-cols-3 gap-4">
          <div className="spec-block">
            <div className="spec-number">3</div>
            <div className="spec-label">{t('stats_experience')}</div>
          </div>
          <div className="spec-block">
            <div className="spec-number">20+</div>
            <div className="spec-label">{t('stats_tech')}</div>
          </div>
          <div className="spec-block">
            <div className="spec-number">4</div>
            <div className="spec-label">{t('stats_languages')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
