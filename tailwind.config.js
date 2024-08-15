/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        mobile: "url('/src/assets/bg-intro-mobile.png')",
        desktop: "url('/src/assets/bg-intro-desktop.png')",
      },
      screens: {
        xs: '460px'
      }
    },
  },
  plugins: [],
}