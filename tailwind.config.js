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
        // Inter stands in for SF Pro Display/Text — same grotesque
        // structure and optical sizing axis, openly licensed for web use.
        sf: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        text: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        // True Apple black — not navy-tinted, not warm
        black: '#000000',
        // Apple's near-black surface (their cards on dark sections)
        surface: '#1D1D1F',
        // Apple's hairline grays — base tone for outline borders,
        // and a slightly darker tone for section dividers
        hairline: '#424245',
        hairline2: '#2D2D2F',
        // Apple's text grays
        gray1: '#F5F5F7',   // near-white headlines
        gray2: '#A1A1A6',   // secondary body text
        gray3: '#6E6E73',   // tertiary / disabled
        // Single accent — green, used very sparingly.
        // Doubles as the "available" status color since both now
        // share the same hue family; keeping two near-identical
        // greens around would just be redundant tokens.
        accent: '#30D158',
        // Status colors used the Apple way: flat, never glowing
        orange: '#FF9500',
      },
      fontSize: {
        // Apple's actual hero scale (their h1 is enormous)
        'hero': ['clamp(2.75rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.07', letterSpacing: '-0.015em' }],
        'headline': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
