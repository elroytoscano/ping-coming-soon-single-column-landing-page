const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: { min: '375px', max: '539px' },
        smd: { min: '540px', max: '767px' },
        smmd: { min: '768px', max: '959px' },
        md: { min: '960px', max: '1199px' },
        lg: '1160px',
        xl: '1440px',
        xxl: '2560px',
      },
      colors: {
        fmPrimaryBlue: 'hsl(223, 87%, 63%)',
        fmSecondaryPaleBlue: 'hsl(223, 100%, 88%)',
        fmSecondaryLightRed: 'hsl(354, 100%, 66%)',
        fmNeutral: 'hsl(0, 0%, 59%)',
        fmVeryDarkBlue: 'hsl(209, 33%, 12%)',
      },
    },
  },
  variants: {},
  plugins: [],
};
