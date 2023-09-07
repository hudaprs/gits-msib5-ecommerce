/** @type {import('tailwindcss').Config} */
module.exports = {
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
    extend: {}
  },
  plugins: [],
  presets: [require('@morpheme/tailwind-config/preset')]
}
