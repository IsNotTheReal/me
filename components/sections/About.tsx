import { useTranslations } from 'next-intl'
import { pick } from '@/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Profile, Locale } from '@/types'

export default function About({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = useTranslations('about')
  const tHero = useTranslations('hero')

  const availabilityDot: Record<Profile['availability'], string> = {
    open: 'bg-accent',
    limited: 'bg-orange',
    closed: 'bg-gray3',
  }
  const availabilityLabel: Record<Profile['availability'], string> = {
    open: tHero('available'),
    limited: tHero('limited'),
    closed: tHero('closed'),
  }

  return (
    <section id="about" className="hairline-divider bg-white">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="headline mx-auto max-w-4xl">
            {t('heading')}{' '}
            <span className="text-gray2">{t('heading_accent')}</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <ScrollReveal delay={160}>
            <div className="space-y-6">
              <p className="font-text text-[19px] leading-relaxed text-gray2 sm:text-[21px]">
                {pick(profile.bio, locale)}
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link-chevron">
                  GitHub <span aria-hidden>›</span>
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-chevron">
                  LinkedIn <span aria-hidden>›</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="panel">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="font-text text-[11px] uppercase tracking-[0.18em] text-gray3">{t('field_role')}</p>
                  <p className="mt-2 font-sf text-[20px] font-semibold text-gray1">{pick(profile.title, locale)}</p>
                </div>
                <div className="flex items-center gap-2 border border-hairline2 bg-surface px-2.5 py-1.5">
                  <span className={`h-2 w-2 rounded-full ${availabilityDot[profile.availability]}`} />
                  <span className="font-text text-[12px] text-gray1">{availabilityLabel[profile.availability]}</span>
                </div>
              </div>

              <div className="space-y-3">
                <InfoItem label={t('field_languages')} value={t('languages_value')} />
                <InfoItem label={t('field_location')} value={pick(profile.location, locale)} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-hairline2 py-3">
      <span className="font-text text-[11px] uppercase tracking-[0.18em] text-gray3">{label}</span>
      <span className="max-w-[60%] text-right font-text text-[14px] text-gray1">{value}</span>
    </div>
  )
}
