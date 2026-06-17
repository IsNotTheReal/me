import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { pick } from '@/data'
import type { Profile, Locale } from '@/types'

const AVAILABILITY_DOT: Record<Profile['availability'], string> = {
  open: 'bg-moss',
  limited: 'bg-rust',
  closed: 'bg-inkDim',
}

export default function Hero({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = useTranslations('hero')

  const availLabel = {
    open: t('available'),
    limited: t('limited'),
    closed: t('closed'),
  }[profile.availability]

  return (
    <section id="hero" className="relative grain border-b border-line">
      <div className="section-wrap pt-32 sm:pt-40 pb-20">
        {/* Filing reference, like a catalog card number */}
        <div className="flex items-center gap-3 mb-10 font-data text-[11px] text-inkDim tracking-wide">
          <span>REF. 2026-DEV-01</span>
          <span className="w-1 h-1 rounded-full bg-inkDim" />
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${AVAILABILITY_DOT[profile.availability]}`} />
            {availLabel}
          </span>
        </div>

        {/* Name — serif display, the real signature element */}
        <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-medium text-paper leading-[0.98] tracking-tight mb-6">
          {profile.name}
        </h1>

        {/* Title set as a subtitle, not a typewriter gimmick */}
        <p className="font-display text-xl sm:text-2xl text-rust italic mb-8 max-w-xl">
          {pick(profile.title, locale)}
        </p>

        <p className="text-ink leading-relaxed max-w-md mb-12 text-[15px]">
          {pick(profile.tagline, locale)}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <a href="#experience" className="btn-rust">
            {t('cta_projects')}
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            {t('cta_contact')}
          </a>
        </div>

        {/* Ledger-style stat row instead of glowing numbers */}
        <div className="grid grid-cols-3 border-t border-line pt-6">
          <HeroStat value="03" label={t('stats_experience')} />
          <HeroStat value="20+" label={t('stats_tech')} />
          <HeroStat value="04" label={t('stats_languages')} />
        </div>
      </div>
    </section>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-line pl-5 first:border-l-0 first:pl-0">
      <div className="font-display text-2xl text-paper">{value}</div>
      <div className="font-data text-[10px] tracking-widest text-inkDim mt-1 uppercase">
        {label}
      </div>
    </div>
  )
}
