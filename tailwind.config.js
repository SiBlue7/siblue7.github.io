/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.html', './js/**/*.js', './index.html'],
  theme: {
    extend: {},

    backgroundColor: theme => ({
       ...theme('colors'),
       'bleuFonce': '#0d2840',
       'bleuClair': '#d6e8f4',
       'danger': '#e3342f',
      })
  },
  plugins: [],
}

