/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBtn: '#817BFF',
        secondary: '#333333',
        beige: '#FFF0E7',
        rose: '#F6EAF0',
        violeta: '#EEE0F4',
        secondarygrey: '#757474',
        violetaClear: '#F0EFFF',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
