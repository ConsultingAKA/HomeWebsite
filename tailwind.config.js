/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aka-off-white': '#f7f7f5',
        'aka-dark-white': '#DDD0C1',
        'aka-beige': '#C79971',
        'aka-tan': '#bea48e',
        'aka-light-brown': '#9F6848',
        'aka-medium-brown': '#9F6848',
        'aka-dark-brown': '#514741',
        'aka-blue-gray': '#9ac0d5',
      }
    },
  },
  plugins: [],
}