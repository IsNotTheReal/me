'use client'

import { useTranslations } from 'next-intl'
import { Copy, Check } from 'lucide-react'
import { useClipboard } from '@/lib/useClipboard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Profile } from '@/types'

export default function Contact({ profile }: { profile: Profile }) {
  const t = useTranslations('contact')
  const { copied, copy } = useClipboard()

  return (
    <section id="contact" className="bg-black">
      <div className="section-wrap text-center">
        <ScrollReveal>
          <h2 className="headline mb-6">{t('heading')}</h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="font-text text-[19px] text-gray2 max-w-xl mx-auto leading-relaxed mb-12">
            {t('body')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <a href={`mailto:${profile.email}`} className="btn-pill">
              {t('email_label')}
            </a>
            <button onClick={() => copy(profile.email)} className="btn-pill-outline">
              {copied ? (
                <>
                  <Check size={15} className="mr-1.5" /> {t('copied')}
                </>
              ) : (
                <>
                  <Copy size={15} className="mr-1.5" /> {t('copy_email')}
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="flex items-center justify-center gap-10 border-t border-hairline2 pt-10">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-chevron"
            >
              {t('linkedin_label')}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-chevron"
            >
              {t('github_label')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
