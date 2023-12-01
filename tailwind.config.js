/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#f8ecea',
          light: '#94a2b9',
          disabled: '#000000'
        },
        primaryBG: '#5b20b7',
        disabledBG: '#808080',
      }
    },
  },
  plugins: [],
}

