const colors = require('tailwindcss/colors')

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
        accent: colors.red,
        dark: {
          100: '#17181e',
          200: '#101215'
        }
      },
      fontFamily: {
        heading: 'Lora, serif',
        mono: 'Space Mono, monospace'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
