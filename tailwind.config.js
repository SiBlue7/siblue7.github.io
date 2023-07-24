/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.html', './js/**/*.js', './index.html'],
  theme: {
    extend: {
    },
  
    variants: {
      margin: ['print'], // add the print variant to enable where needed
      marginright: ['print'],
      marginleft: ['print'],
      marginbottom: ['print'],
      margintop: ['print'],
      padding: ['print'],
      paddingright: ['print'],
      paddingleft: ['print'],
      paddingbottom: ['print'],
      paddingtop: ['print'],
      display: ['print'],
      backgroundColor: ['print'],
      textColor: ['print'],
      textDecoration: ['print'],
      textTransform: ['print'],
      fontSize: ['print'],
      fontWeight: ['print'],
      fontFamily: ['print'],
    },

    backgroundColor: theme => ({
       ...theme('colors'),
       'bleuFonce': '#0d2840',
       'bleuClair': '#d6e8f4',
       'danger': '#e3342f',
      })
  },
  plugins: [
    require('tailwindcss-print-styles')
  ],
}

