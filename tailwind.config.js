/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // All colors use CSS variables so they switch with the theme
        bg:          'rgb(var(--color-bg) / <alpha-value>)',
        surface:     'rgb(var(--color-surface) / <alpha-value>)',
        card:        'rgb(var(--color-card) / <alpha-value>)',
        border:      'rgb(var(--color-border) / <alpha-value>)',
        rose:        'rgb(var(--color-rose) / <alpha-value>)',
        'rose-light':'rgb(var(--color-rose-light) / <alpha-value>)',
        'rose-dark': 'rgb(var(--color-rose-dark) / <alpha-value>)',
        blush:       'rgb(var(--color-blush) / <alpha-value>)',
        gold:        'rgb(var(--color-gold) / <alpha-value>)',
        'gold-light':'rgb(var(--color-gold-light) / <alpha-value>)',
        'off-white': 'rgb(var(--color-text) / <alpha-value>)',
        muted:       'rgb(var(--color-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script:  ['"Great Vibes"', 'cursive'],
        mono:    ['"DM Mono"', 'monospace'],
        body:    ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, rgb(var(--color-rose)) 0%, rgb(var(--color-rose-light)) 50%, rgb(var(--color-rose)) 100%)',
        'gold-gradient': 'linear-gradient(135deg, rgb(var(--color-gold)) 0%, rgb(var(--color-gold-light)) 50%, rgb(var(--color-gold)) 100%)',
      },
      animation: {
        marquee:    'marquee 30s linear infinite',
        aurora:     'aurora 12s ease infinite',
        sparkle:    'sparkle 3s ease-in-out infinite',
        float:      'float 6s ease-in-out infinite',
        'float-r':  'float 8s ease-in-out infinite reverse',
        'spin-slow':'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        sparkle: {
          '0%,100%': { opacity: 0.15, transform: 'scale(0.8) rotate(0deg)' },
          '50%':     { opacity: 1,    transform: 'scale(1.2) rotate(180deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
