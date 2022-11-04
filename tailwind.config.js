/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,jsx,ts,tsx}",
    "./layouts/*.{js,jsx,ts,tsx}",
    "./components/screens/*.{js,jsx,ts,tsx}",
    "./components/common/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 1 },
          '50%': {opacity: 0.5, scale: '0.95'},
          '100%':  { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.15s',
      }
    }
  },
  plugins: [],
}
