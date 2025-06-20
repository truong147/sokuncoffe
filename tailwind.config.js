/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-orange': '#EA8025',
        'coffee-brown': '#8B4513',
        'coffee-light': '#FFF7ED',
        'coffee-dark': '#1F2937',
        'coffee-gray': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['SF Pro Display', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
