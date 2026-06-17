import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { pick } from '@/data'
import type { Profile, Locale } from '@/types'

export default function About({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = useTranslations('about')

  return (
    <section id="about" className="border-b border-line">
      <div className="section-wrap">
        <div className="ref-mark">{t('label')}</div>
        <div className="ledger-rule" />

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-16">
          {/* Bio — set like an editorial pull quote, not a terminal */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-paper leading-tight mb-8">
              {t('heading')}{' '}
              <span className="text-rust italic">{t('heading_accent')}</span>
            </h2>
            <p className="text-ink leading-[1.8] text-[15px]">
              {pick(profile.bio, locale)}
            </p>
          </div>

          {/* Facts laid out as a ledger / index card, not a fake shell */}
          <div className="border border-line p-6 self-start">
            <div className="font-data text-[10px] tracking-widest text-inkDim uppercase mb-5 pb-4 border-b border-line">
              {t('terminal_title')}
            </div>

            <dl className="space-y-4 text-sm">
              <Entry label={t('field_role')} value={pick(profile.title, locale)} />
              <Entry label={t('field_location')} value={profile.location} />
              <Entry label={t('field_status')} value={t('status_open')} accent />
              <Entry label={t('field_languages')} value={t('languages_value')} />
              <EntryLink
                label={t('field_github')}
                value="github.com/IsNotTheReal"
                href={profile.links.github}
              />
              <EntryLink
                label={t('field_linkedin')}
                value="in/alexandre-mayo-esteiro"
                href={profile.links.linkedin}
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Entry({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="font-data text-[11px] text-inkDim uppercase tracking-wide shrink-0 pt-0.5">
        {label}
      </dt>
      <dd className={`text-right text-[13px] ${accent ? 'text-moss' : 'text-paper2'}`}>
        {value}
      </dd>
    </div>
  )
}

function EntryLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="font-data text-[11px] text-inkDim uppercase tracking-wide shrink-0 pt-0.5">
        {label}
      </dt>
      <dd className="text-right text-[13px]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rust hover:text-paper transition-colors inline-flex items-center gap-1"
        >
          {value} <ArrowUpRight size={11} />
        </a>
      </dd>
    </div>
  )
}
