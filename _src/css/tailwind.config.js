const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: {
          ...colors.yellow,
          '400': '#ffff00',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}