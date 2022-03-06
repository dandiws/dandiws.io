const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './blog/**/*.mdx}',
    './utils/mdxcomponents.js'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)'
        },
        dark: {
          100: '#17181e',
          200: '#101215'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: 'League Spartan',
        mono: 'Space Mono, monospace'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
