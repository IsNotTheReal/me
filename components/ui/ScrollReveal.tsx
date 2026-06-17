'use client'

import { useInView } from '@/lib/useInView'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.08)

  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  )
}
