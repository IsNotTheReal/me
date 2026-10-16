import { profile } from '@/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline2 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-center gap-5 text-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-text text-[12px] uppercase tracking-[0.14em] text-gray3 transition-colors hover:text-gray1"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-text text-[12px] uppercase tracking-[0.14em] text-gray3 transition-colors hover:text-gray1"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-text text-[12px] uppercase tracking-[0.14em] text-gray3 transition-colors hover:text-gray1"
          >
            {profile.email}
          </a>
        </div>
        <p className="text-center font-text text-[12px] text-gray3">
          © {year} Alexandre Mayo Esteiro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
