/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,jsx,ts,tsx}",
    "./layouts/*.{js,jsx,ts,tsx}",
    "./components/screens/*.{js,jsx,ts,tsx}",
    "./components/common/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  plugins: [],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-gray-500',
  ]
}
