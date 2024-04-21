/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "1/10":"10%",
        "9/10":"90%",
      },
      padding: {
        '72': '25rem',
      },
      backgroundColor: {
        "linkedin-blue": "#0077b5"
      },
      textColor: {
        "linkedin-blue": "#0077b5"
      }
    },
  },
  plugins: [],
}