/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "serif"],
        Barlow: ["Barlow", "sans-serif"]
      },
      scrollbar: {
        'webkit-none': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
      backgroundImage: {
        'about-bg': "url(./src/img/bg-4.jpg)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
