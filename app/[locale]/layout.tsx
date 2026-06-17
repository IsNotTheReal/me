import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/lib/i18n/routing'
import { profile, pick } from '@/data'
import type { Locale } from '@/types'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const isEs = l === 'es'

  return {
    title: `${profile.name} — ${isEs ? 'Desarrollador de Software Junior' : 'Junior Software Developer'}`,
    description: pick(profile.bio, l),
    keywords: isEs
      ? ['Desarrollador Junior', 'Full Stack', 'Ciberseguridad', 'PHP', 'Symfony', 'Galicia']
      : ['Junior Developer', 'Full Stack', 'Cybersecurity', 'PHP', 'Symfony', 'Galicia'],
    authors: [{ name: profile.name }],
    icons: {
      icon: '/icon.svg',
      apple: '/apple-icon.png',
    },
    openGraph: {
      title: profile.name,
      description: pick(profile.bio, l),
      type: 'website',
      locale: isEs ? 'es_ES' : 'en_GB',
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Enables static rendering for this locale
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Sans+3:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-carbon text-paper2 antialiased selection:bg-rust/30 selection:text-paper">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
