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
    <section id="about" className="bg-black hairline-divider">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="eyebrow">{t('label')}</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="headline max-w-3xl mx-auto">
            {t('heading')}{' '}
            <span className="text-gray2">{t('heading_accent')}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="font-text text-[19px] text-gray2 max-w-2xl mx-auto text-center mt-8 leading-relaxed">
            {pick(profile.bio, locale)}
          </p>
        </ScrollReveal>

        {/* Apple-style info row — flat, centered, separated by hairlines, not a card */}
        <ScrollReveal delay={240}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-14 pt-10 border-t border-hairline2">
            <InfoItem label={t('field_role')} value={pick(profile.title, locale)} />
            <InfoItem label={t('field_languages')} value={t('languages_value')} />
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${availabilityDot[profile.availability]}`} />
              <span className="font-text text-[15px] text-gray1">{availabilityLabel[profile.availability]}</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex items-center justify-center gap-8 mt-8">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-chevron"
          >
            GitHub <span aria-hidden>›</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-chevron"
          >
            LinkedIn <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-text text-[11px] uppercase tracking-wide text-gray3 mb-1">{label}</div>
      <div className="font-text text-[15px] text-gray1">{value}</div>
    </div>
  )
}
