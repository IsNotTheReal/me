import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          background: '#15140F',
          color: '#F2EEE3',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'monospace',
              color: '#C4622D',
              fontSize: '12px',
              letterSpacing: '0.15em',
              marginBottom: '12px',
            }}
          >
            § 404 — NOT FOUND
          </p>
          <h1 style={{ fontSize: '28px', fontWeight: 500, color: '#F2EEE3', marginBottom: '20px' }}>
            This page isn&apos;t on file.
          </h1>
          <Link href="/es" style={{ color: '#C4622D', fontSize: '14px', fontFamily: 'monospace' }}>
            ← back to index
          </Link>
        </div>
      </body>
    </html>
  )
}
