/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}

