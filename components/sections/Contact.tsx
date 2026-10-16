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
    <section id="contact" className="bg-white">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="border-y border-hairline2 py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-text text-[11px] uppercase tracking-[0.16em] text-gray3">{t('label')}</p>
              <h2 className="mt-5 font-sf text-headline font-semibold tracking-[-0.05em] text-gray1">{t('heading')}</h2>
              <p className="mx-auto mt-5 max-w-2xl font-text text-[19px] leading-relaxed text-gray2 sm:text-[21px]">
                {t('body')}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={`mailto:${profile.email}`} className="btn-pill">
                  {t('email_label')}
                </a>
                <button onClick={() => copy(profile.email)} className="btn-pill-outline">
                  {copied ? (
                    <>
                      <Check size={15} /> {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy size={15} /> {t('copy_email')}
                    </>
                  )}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-hairline2 pt-8">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-chevron">
                  {t('linkedin_label')}
                </a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link-chevron">
                  {t('github_label')}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
