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
          disabled: '#000000',
          defaultTitle: '#d4e9f0',
          default: '#3a668a',
        },
        primaryBG: '#5b20b7',
        disabledBG: '#808080',
        defaultBG: '#141f32',
      }
    },
  },
  plugins: [],
}

