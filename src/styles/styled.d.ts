import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
      background: string
      backgroundLight: string
      backgroundAlternative: string
      title: string
      text: string
      lightGrey: string
      subtitle: string
      buttonText: string

      gradientTwoColors: string

      black: string
      white: string

      danger: string
      dangerHover: string
      success: string
      warning: string

      gray: {
        900: string
        800: string
        700: string
        600: string
        500: string
        400: string
        300: string
        200: string
        100: string
        50: string
      }
    }
    typography: {
      fontFamily: string

      fontSize: {
        xl: string
        md: string
        sm: string
        xs: string
        h1: string
        h2: string
        h3: string
      }

      fontWeight: {
        medium: string
        semiBold: string
      }
    }
  }

  export interface CustomTheme {
    title: string
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
      background: string
      backgroundLight: string
      backgroundAlternative: string
      title: string
      text: string
      lightGrey: string
      subtitle: string
      buttonText: string

      gradientTwoColors: string

      black: string
      white: string

      danger: string
      dangerHover: string
      success: string
      warning: string

      gray: {
        900: string
        800: string
        700: string
        600: string
        500: string
        400: string
        300: string
        200: string
        100: string
        50: string
      }
    }
    typography: {
      fontFamily: string

      fontSize: {
        xl: string
        md: string
        sm: string
        xs: string
        h1: string
        h2: string
        h3: string
      }

      fontWeight: {
        medium: string
        semiBold: string
      }
    }
  }
}
