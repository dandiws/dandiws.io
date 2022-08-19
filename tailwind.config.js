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
          light: 'rgb(var(--accent-light) / <alpha-value>)',
          dark: 'rgb(var(--accent-dark) / <alpha-value>)'
        },
        dark: {
          100: '#17181e',
          200: '#101215'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: 'Space Grotesk'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
