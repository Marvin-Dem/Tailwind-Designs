/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark': 'rgb(31,40,55)',
        'grey': 'rgb(55,64,81)',
        'blue': 'rgb(63,105,173)',
        'green': 'rgb(24,162,74)',
        'yellow': 'rgb(243,201,70)',
        'darkviolet': 'rgb(100,77,186)'
      }
    },
  },
  plugins: [],
}

