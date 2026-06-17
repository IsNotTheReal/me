'use client'

import { useTranslations } from 'next-intl'
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react'
import { useClipboard } from '@/lib/useClipboard'
import type { Profile } from '@/types'

export default function Contact({ profile }: { profile: Profile }) {
  const t = useTranslations('contact')
  const { copied, copy } = useClipboard()

  return (
    <section id="contact" className="border-b border-line">
      <div className="section-wrap">
        <div className="ref-mark">{t('label')}</div>
        <div className="ledger-rule" />

        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-paper mb-6">
            {t('heading')}
          </h2>
          <p className="text-ink leading-relaxed text-[15px] mb-12">
            {t('body')}
          </p>

          <div className="border border-line divide-y divide-line">
            <ContactRow
              icon={<Mail size={16} />}
              label={t('email_label')}
              value={profile.email}
              action={
                <button
                  onClick={() => copy(profile.email)}
                  className="text-inkDim hover:text-rust transition-colors"
                  aria-label={t('copy_email')}
                >
                  {copied ? <Check size={15} className="text-moss" /> : <Copy size={15} />}
                </button>
              }
            />
            <ContactRow
              icon={<Linkedin size={16} />}
              label={t('linkedin_label')}
              value="alexandre-mayo-esteiro"
              href={profile.links.linkedin}
            />
            <ContactRow
              icon={<Github size={16} />}
              label={t('github_label')}
              value="IsNotTheReal"
              href={profile.links.github}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
  action,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  action?: React.ReactNode
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 p-5 group">
      <div className="flex items-center gap-4">
        <span className="text-rust">{icon}</span>
        <div>
          <div className="font-data text-[10px] tracking-widest uppercase text-inkDim">{label}</div>
          <div className="text-[14px] text-paper2 mt-0.5">{value}</div>
        </div>
      </div>
      {action ?? (
        <span className="text-inkDim group-hover:text-rust transition-colors text-sm">→</span>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:bg-carbon2 transition-colors">
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}
