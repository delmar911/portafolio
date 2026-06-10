/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
       // wine: '#4D0005',
        wine: '#4D0005',
        deep: '#9e182b',
        blush: '#f2afbc',
        pale: '#f9cbd6',
        nude: '#f2e0d2',
        rose: '#DF8F9C',
        cream: '#FAF4D4',
        dark : '#2a0a0d',
        mid : '#5c1a22',
        pastel : '#FAF2F2'
      },
      fontFamily:{
        'poppins':['Poppins'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/Onda-sonido.jpg')"
      },
      animation: {
        carousel: 'carousel 20s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}