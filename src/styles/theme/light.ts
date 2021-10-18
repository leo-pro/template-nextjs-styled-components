/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'light',
  breakpoints: {
    sm: '30rem',
    md: '48rem',
    lg: '62rem',
    xl: '80rem',
    '2xl': '96rem'
  },
  colors: {
    primary: '#00B0BD',
    secondary: '#3730A3',
    tertiary: '#158582',
    background: '#14141B',
    backgroundLight: '#1D1E26',
    backgroundAlternative: '#324B4A',
    title: '#FFFFFF',
    text: '#FFFFFF',
    lightGrey: '#D3D3D3',
    subtitle: '#EEEEEE',
    buttonText: '#EEEEEE',

    black: '#000000',
    white: '#FFFFFF',

    gradientTwoColors:
      'linear-gradient(90deg, #00C6C2 0%, #00B0BD 0.01%, #3730A3 100%)',

    danger: '#FB3434',
    dangerHover: '#ED3232',
    success: '#1BA81B',
    warning: '#ED8936',

    gray: {
      900: '#3C3C3C',
      800: '#626262',
      700: '#828282',
      600: '#A0A0A0',
      500: '#B9B9B9',
      400: '#CECECE',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F7F7F7',
      50: '#FDFDFD'
    }
  },
  typography: {
    fontFamily: 'Poppins',

    fontSize: {
      xl: '2rem',
      md: '.938rem',
      sm: '.813rem',
      xs: '.75rem',
      h1: '1.5rem',
      h2: '1.25rem',
      h3: '1.125rem'
    },

    fontWeight: {
      medium: '500',
      semiBold: '600',
      bold: '700'
    }
  }
}
