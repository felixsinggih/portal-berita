/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
      },
    },
    fontFamily: {
      openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
