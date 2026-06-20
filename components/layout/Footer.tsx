import { useTranslations } from 'next-intl'
import { profile } from '@/data'

export default function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-hairline2">
      <div className="max-w-[1100px] mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
            className="font-text text-[12px] text-gray3 hover:text-gray2 transition-colors">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-text text-[12px] text-gray3 hover:text-gray2 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}
            className="font-text text-[12px] text-gray3 hover:text-gray2 transition-colors">
            {profile.email}
          </a>
        </div>
        <p className="font-text text-[12px] text-gray3 text-center">
          Copyright © {year} Alexandre Mayo Esteiro. {t('built')}
        </p>
      </div>
    </footer>
  )
}
