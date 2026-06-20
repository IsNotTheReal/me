import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          background: '#000000',
          color: '#F5F5F7',
          fontFamily: '-apple-system, Inter, system-ui, sans-serif',
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
              color: '#A1A1A6',
              fontSize: '15px',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            404
          </p>
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#F5F5F7', marginBottom: '20px', letterSpacing: '-0.01em' }}>
            This page isn&apos;t available.
          </h1>
          <Link href="/es" style={{ color: '#30D158', fontSize: '17px' }}>
            Back to home ›
          </Link>
        </div>
      </body>
    </html>
  )
}
