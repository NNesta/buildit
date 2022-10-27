/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primaryGreen: '#4397A4',
        primaryGreenLight: '#678C92',
        primaryGreenDark: '#486A6',
        primaryGreenDarkish: '#486A6F',
        primarySky: '#C6DBFF',
        primarySkyDry: '#E1EBFA',
        primaryGreenish: '#5BCCDE',
        primaryGreenAccent: '#678C92',
        primaryWhiteAccent: '#F4F7FF',
      }
    },
  },
  plugins: [],
}
