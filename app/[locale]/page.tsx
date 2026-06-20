import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/lib/i18n/routing'
import { profile, experience, education, skillCategories } from '@/data'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import type { Locale } from '@/types'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Enables static rendering for this locale
  setRequestLocale(locale)

  const l = locale as Locale

  return (
    <>
      <Nav locale={l} />
      <main>
        <Hero profile={profile} locale={l} />
        <About profile={profile} locale={l} />
        <Experience items={experience} locale={l} />
        <Skills categories={skillCategories} locale={l} />
        <Education items={education} locale={l} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  )
}
