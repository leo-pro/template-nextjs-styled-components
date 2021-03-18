/* eslint @typescript-eslint/no-empty-interface: "off" */

// import 'styled-components';

// import theme from './theme';

// export type Theme = typeof theme

// declare module 'styled-components'{
//   export interface DefaultTheme extends Theme {}
// }

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
