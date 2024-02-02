/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/font-family#using-custom-values
       fontFamily: {
        title: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}

