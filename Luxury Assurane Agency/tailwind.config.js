/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    colors: {
'main': '#0057FF',
'cardd': '#26252C'
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 