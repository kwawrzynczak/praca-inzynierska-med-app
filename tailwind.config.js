const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
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
        accent: colors.blue[400],
        dark: colors.zinc[950],
        light: colors.zinc[600],
        background: '#E9EEFF',
      },
    },
  },
  plugins: [],
};
