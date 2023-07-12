const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.stone[200],
      secondary: colors.slate[900],
      accent: colors.indigo[400],
    },
    extend: {},
  },
  plugins: [],
};
