/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1030px',
      'md': '770px',
    },

    extend: {
      fontFamily: {
        'primary' : ['Poppins']
      },
      colors: {
        // 'primary': '#053B50',
        'primary': '#1e1e1e',
        'secondry': '#2f2f2f',
        'third': '#64CCC5',
        'fourth': '#fafafa',
        'fifth': '#242CBF'
      }
    },
  },
  plugins: [],
}

