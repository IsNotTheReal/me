'use client'

import { useInView } from '@/lib/useInView'

export default function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  /** Stagger delay in milliseconds, applied once the element enters view */
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.08)

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
