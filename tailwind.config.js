// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'
  ],
  theme: {
    extend: {
      fontSize: {
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px'
      },
      colors: {
        custom: {
          'light-blue': 'var(--color-blue-light)'
        },
        gray: {
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)'
        },
        blue: {
          100: 'var(--color-blue-100)',
          700: 'var(--color-blue-700)'
        },
        primary: {
          700: 'var(--color-primary-700)'
        },
        black: {
          400: 'var(--color-black-400)'
        }
      }
    }
  },
  plugins: [],
  presets: [require('@morpheme/tailwind-config/preset')]
}
