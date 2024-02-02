/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(59, 104, 255, 100)',
        white: 'rgba(255,255,255,1)',
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
