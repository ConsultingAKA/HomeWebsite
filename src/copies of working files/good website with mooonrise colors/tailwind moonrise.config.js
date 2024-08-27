/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#BFB17C',
        'custom-brown': '#6A4021',
        'custom-orange': '#D88A3B',
        'custom-teal': '#849585',
      }
    },
  },
  plugins: [],
}