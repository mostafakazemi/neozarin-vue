/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cont-dim': 'rgba(249, 249, 251, 1)'
      },
      screens: {
        lg: '920px'
        // => @media (min-width: 920px) { ... }
      }
    }
  },
  plugins: []
}
