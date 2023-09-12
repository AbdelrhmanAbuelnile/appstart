/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : ['Poppins']
      },
      colors: {
        'primary': '#053B50',
        'secondry': '#176B87',
        'third': '#64CCC5',
        'fourth': '#EEEEEE',
      }
    },
  },
  plugins: [],
}

