/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1DB954',
        'brand-hover': '#1ED760',
        bg: '#191414',
        'bg-light': '#282828',
        'bg-lighter': '#3E3E3E',
        text: '#FFFFFF',
        'text-sub': '#B3B3B3',
        surface: '#282828',
        'surface-light': '#3E3E3E',
      },
      fontFamily: {
        circular: ['Circular', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}