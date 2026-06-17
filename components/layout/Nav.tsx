'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/lib/i18n/navigation'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/types'

const NAV_IDS = ['about', 'experience', 'skills', 'education', 'contact'] as const

export default function Nav({ locale }: { locale: Locale }) {
  const t = useTranslations('nav')
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'es' : 'en' })
  }

  const navLinks = NAV_IDS.map((id) => ({ href: `#${id}`, label: t(id), id }))

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${scrolled ? 'nav-surface' : ''}`}>
      <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg text-paper">
          A<span className="text-rust">.</span>M
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`font-data text-[11px] tracking-wide uppercase transition-colors ${
                  active === link.id ? 'text-rust' : 'text-inkDim hover:text-paper2'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="font-data text-[10px] tracking-widest px-2.5 py-1 border border-line text-inkDim hover:border-rust hover:text-rust transition-colors"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            className="md:hidden text-inkDim hover:text-paper transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden nav-surface border-t border-line px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-data text-[12px] tracking-wide uppercase text-ink hover:text-rust transition-colors"
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
