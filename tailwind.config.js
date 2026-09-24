/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D28C0E',
        'brand-gold-light': '#FFBF3F',
        'brand-gold-secondary': '#FFA400',
        'brand-gold-toggle': '#FFA30A',
        'brand-gold-hover': '#b87705',
        'brand-dark': '#202125',
        'brand-dark-deep': '#141318',
        'brand-dark-footer': '#282828',
        'brand-dark-card': '#181B1D',
        'brand-navy-deep': '#03273F',
        'brand-brown': '#7F4222',
        'brand-bg-light': '#f4f4f4',
        'brand-text-dark': '#3A3A3A',
        'brand-text-muted': '#48494c',
        'brand-text-light': '#CACACA',
        'brand-text-lighter': '#DADADA',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        zilla: ['"Zilla Slab"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        didact: ['"Didact Gothic"', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      maxWidth: {
        'boxed': '1140px',
        'wide': '1170px',
        'content': '1100px',
        'footer': '1200px',
      },
      boxShadow: {
        'card-dark': '3px 3px 10px 0px rgba(83, 83, 83, 0.13)',
        'nav-sticky': '0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};

