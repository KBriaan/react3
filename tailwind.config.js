/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#e85d04',
        secondary:'#9d0208',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'1rem'
        }

      }
    },
  },
  plugins: [],
}