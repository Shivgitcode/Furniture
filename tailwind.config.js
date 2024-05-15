/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: [
        { "main": "#FFB607" }
      ],
      fontFamily: {
        "poppins": ["Poppins", "sans"]
      }
    },
  },
  plugins: [],
}