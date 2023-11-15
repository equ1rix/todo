/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        modalBG: '#0e172b',
        modalButton: '#5b21b6',
        modalInput: '#151e32',
        modalText: '#2e4f7b',
        modalInputText: '#94a2b9',
      }
    },
  },
  plugins: [],
}

