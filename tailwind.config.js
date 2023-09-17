/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export const content = [
  "./src/index.html",
  "./src/components/*.jsx"
]
export const theme = {
  container: {
    center: true,
  },
  extend: {},
}
export const plugins = [
  plugin(function ({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
      'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
      'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
    })
  })
]
