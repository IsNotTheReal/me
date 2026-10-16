'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/lib/i18n/navigation'
import type { Locale } from '@/types'

const NAV_IDS = ['about', 'experience', 'skills', 'education', 'contact'] as const

export default function Nav({ locale }: { locale: Locale }) {
  const t = useTranslations('nav')
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'es' : 'en', scroll: false })
  }

  const navLinks = NAV_IDS.map((id) => ({ href: `#${id}`, label: t(id), id }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-surface">
      <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <a href="#" className="inline-flex items-center gap-3 text-gray1">
          <span className="flex h-8 w-8 items-center justify-center border border-hairline font-sf text-[11px] font-semibold tracking-[0.1em] text-gray1">
            AM
          </span>
          <span className="font-sf text-[14px] font-semibold tracking-[-0.04em]">Alexandre Mayo</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-text text-[12px] uppercase tracking-[0.12em] text-gray2 transition-colors hover:text-gray1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="border border-hairline2 px-3 py-2 font-text text-[11px] uppercase tracking-[0.12em] text-gray2 transition-colors hover:border-gray3 hover:text-gray1"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            className="border border-hairline2 p-2.5 text-gray1 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path d="M1 1L17 17M1 17L17 1" stroke="currentColor" strokeWidth="1.2" />
              ) : (
                <path d="M1 4.5H17M1 13.5H17" stroke="currentColor" strokeWidth="1.2" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline2 bg-white px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sf text-[20px] font-medium text-gray1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
