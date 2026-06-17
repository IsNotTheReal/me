import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data'

export default function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-data text-[11px] text-inkDim">
          © {year} Alexandre Mayo Esteiro · {t('built')}
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
            className="text-inkDim hover:text-rust transition-colors" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-inkDim hover:text-rust transition-colors" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${profile.email}`}
            className="text-inkDim hover:text-rust transition-colors" aria-label="Email">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
