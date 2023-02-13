const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './blog/**/*.mdx',
    './utils/mdxcomponents.js'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: 'rgb(var(--accent-light) / <alpha-value>)',
          dark: 'rgb(var(--accent-dark) / <alpha-value>)'
        },
        dark: {
          100: '#17181e',
          200: '#101215'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        heading: 'var(--font-space-grotesk)'
      },
      animation: {
        slideUp: 'slideUp .6s cubic-bezier(0.4, 0, 0.2, 1) 500ms forwards'
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: ' translateY(100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animation-delay')
  ],
  scrollbar: ['dark', 'rounded'],
  darkMode: ['class', '[data-theme^="dark"]']
}
