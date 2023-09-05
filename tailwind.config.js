const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontWeight: {},
    extend: {
      fontFamily: {
        extralight: 'NunitoSans_200ExtraLight',
        light: 'NunitoSans_300Light',
        normal: 'NunitoSans_400Regular',
        semibold: 'NunitoSans_600SemiBold',
        bold: 'NunitoSans_700Bold',
        extrabold: 'NunitoSans_800ExtraBold',
        black: 'NunitoSans_900Black',
      },
      colors: {
        black: ' #0A2342',
        primary: colors.stone[200],
        secondary: '#666',
        accent: '#00008B',
        background: '#E9EEFF',
      },
    },
  },
  plugins: [],
};
