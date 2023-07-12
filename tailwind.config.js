const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontWeight: {},
    extend: {
      fontFamily: {
        thin: 'Poppins_100Thin',
        extralight: 'Poppins_200ExtraLight',
        light: 'Poppins_300Light',
        normal: 'Poppins_400Regular',
        medium: 'Poppins_500Medium',
        semibold: 'Poppins_600SemiBold',
        bold: 'Poppins_700Bold',
        extrabold: 'Poppins_800ExtraBold',
        black: 'Poppins_900Black',
      },
      colors: {
        primary: colors.stone[200],
        secondary: colors.slate[900],
        accent: colors.indigo[400],
        dark: colors.zinc[950],
        light: colors.zinc[600],
      },
    },
  },
  plugins: [],
};
