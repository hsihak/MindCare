/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subheaderBg: 'rgba(224, 224, 225, 0.5)'
      }
    },
  },
  plugins: [],
}

