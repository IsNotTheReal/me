import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  // localePrefix: 'always' is the default — /es/ and /en/ paths
})
