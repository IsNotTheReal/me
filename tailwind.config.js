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
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        // Carbon black — base background, not pure black
        carbon: '#15140F',
        carbon2: '#1B1A14',
        // Paper / cream tones — text and surfaces
        paper: '#F2EEE3',
        paper2: '#E8E2D2',
        // Aged paper card surface (slightly darker than bg, warm)
        plate: '#1E1C16',
        line: '#332F24',
        line2: '#403B2C',
        // Muted ink tones for secondary text
        ink: '#A39C87',
        inkDim: '#736C5B',
        // Single accent — burnt rust/terracotta. No gradients.
        rust: '#C4622D',
        rustDim: '#8C4620',
        // Supporting stamp colors (used sparingly, flat, no glow)
        moss: '#6B7A4F',
        slate: '#5B7385',
      },
      animation: {
        'rise': 'rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'stamp': 'stamp 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        stamp: {
          '0%': { opacity: '0', transform: 'scale(1.4) rotate(-8deg)' },
          '60%': { opacity: '1', transform: 'scale(0.95) rotate(-8deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-8deg)' },
        },
      },
    },
  },
  plugins: [],
}
