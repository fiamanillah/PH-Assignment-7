/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-clr-1': "#E7FE29"
      },
      backgroundImage: {
        'bg-shadow': "url('./bg-shadow.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        '2xl-d': { max: '1535px' },

        'xl-l': { max: '1279px' },

        'lg-t': { max: '1023px' },

        'md-p': { max: '767px' },

        'sm-p': { max: '639px' },
      },
    },
  },
  plugins: [],
}