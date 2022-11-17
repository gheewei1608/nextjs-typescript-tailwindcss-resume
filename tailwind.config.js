/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'profilebg': "url('../public/images/bg1.jpg')"
      }
    },
  },
  plugins: [],
}
