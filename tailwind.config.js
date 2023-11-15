/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        itemBG: '#5b21b6',
        itemLine: '#6c28d8',
        itemText: '#c5b4f1',
        itemTitle: '#e2e9f1',
      }
    },
  },
  plugins: [],
}

