// Transparent root layout — required by Next.js App Router.
// The real html/body/fonts live in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}
