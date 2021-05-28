const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = {
  ...defaultTheme.fontFamily,
  sans: ['system-ui', 'sans-serif'],
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily,
    extend: {}
  },
  plugins: []
}
