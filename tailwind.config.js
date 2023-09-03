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
        primary: colors.stone[200],
        secondary: '#666',
        accent: colors.blue[400],
        background: '#E9EEFF',
      },
    },
  },
  plugins: [],
};
