/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryButtonBG: '#5b20b7',
        primaryTextColor: '#f8ecea',
        lightButtonBG: '',
        lightTextColor: '#94a2b9',
      }
    },
  },
  plugins: [],
}

