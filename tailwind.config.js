/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: '410px',
      sm: '510px',
      ssm: '610px',
      md: '798px',
      lg: '1054px',
      xl: '1200px',
      '2xl': '1350px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
       
      },
    
    },
    

    extend: {
      colors: {
          indego: "#1A237E",
        lightindego: "#3F51B5",
        txtclr: "#7986cb",
        white: "#FFFFFF",
        "light-white": "rgba(255, 255, 255, 0.8)",
        "border-white": "rgba(255, 255, 255, 0.6)",
      },
      
    },
 
  },
 
  plugins: [],
}