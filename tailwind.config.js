/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/index.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold')},
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
      })
    })
  ]
}
