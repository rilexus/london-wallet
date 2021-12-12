type ThemeType = {
  space: string[];
  colors: {
    black: string;
    white: string;
    yellow: string;
    darkYellow: string;
    lightGray: string;
    gray: string;
    darkGray: string;
    darkestGray: string;
    orange: string;
    red: string;
    blue: string;
    darkGreen: string;
    green: string;
  };
  gradients: {
    footer: string;
  };
  backdrop: {
    blur: {
      none: string;
      sm: string;
      basis: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    brightness: number[];
    saturation: number[];
    buttons: {
      main: string;
    };
  };
  transitionTime: number[];
  typography: {
    fontSizes: string[];
    fontFamilies: {
      inter: {
        name: string;
        weights: {
          thin: string;
          extraLight: string;
          light: string;
          regular: string;
          medium: string;
          semiBold: string;
          bold: string;
          extraBold: string;
          black: string;
        };
      };
    };
    fontWeights: number[];
    lineHeights: {
      body: number;
      heading: number;
    };
    letterSpacings: {
      body: string;
      caps: string;
    };
  };
};

type ThemeI = {
  styles: ThemeType;
  name: string;
};
export type { ThemeI, ThemeType };
