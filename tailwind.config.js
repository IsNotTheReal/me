/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './messages/**/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        text: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#FFFFFF',
        surface: '#F5F5F5',
        panel: '#FFFFFF',
        panelStrong: '#F5F5F5',
        hairline: '#D4D4D4',
        hairline2: '#E5E5E5',
        gray1: '#171717',
        gray2: '#525252',
        gray3: '#737373',
        accent: '#171717',
        accentStrong: '#404040',
        accentWarm: '#737373',
        orange: '#737373',
      },
      fontSize: {
        hero: ['clamp(3rem, 9vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.06em' }],
        display: ['clamp(2.1rem, 5vw, 3.6rem)', { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        headline: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
