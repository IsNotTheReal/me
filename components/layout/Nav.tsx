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
      <nav className="max-w-[1100px] mx-auto px-6 h-11 flex items-center justify-between">
        <a href="#" className="font-sf text-[15px] font-semibold text-gray1">
          Alexandre Mayo
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-text text-[12px] text-gray2 hover:text-gray1 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="font-text text-[12px] text-gray2 hover:text-gray1 transition-colors"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            className="md:hidden text-gray1"
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
        <div className="md:hidden bg-black/98 border-t border-hairline2 px-6 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-text text-[17px] text-gray1"
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
