import { colorsTheme } from './colors';
import { paddingTheme } from './padding';
import { boxShadowTheme } from './box-shadow';
import { fontTheme } from './font';
import { marginTheme } from './margin';
import { textTheme } from './text';
import { backdropTheme } from './backdrop';
import { lineHeightTheme } from './line-height';
import { borderTheme } from './border';
import { opacityTheme } from './opacity';
import { brightnessTheme } from './brightness';

const theme = {
  padding: paddingTheme,
  backdrop: backdropTheme,
  brightness: brightnessTheme,
  border: borderTheme,
  opacity: opacityTheme,
  boxShadow: boxShadowTheme,
  font: fontTheme,
  lineHeight: lineHeightTheme,
  margin: marginTheme,
  text: textTheme,
  colors: colorsTheme,
  color: {
    gray: {
      light: [1, 2, 3, 4, 5, 6],
      dark: [1, 2, 3, 4, 5, 6],
    },
    red: {
      light: [1],
      dark: [1],
    },
    orange: {
      light: [1],
      dark: [1],
    },
    green: {
      light: [1],
      dark: [1],
    },
    teal: {
      light: [1],
      dark: [1],
    },
    blue: {
      light: [1],
      dark: [1],
    },
    indigo: {
      light: [1],
      dark: [1],
    },
    purple: {
      light: [1],
      dark: [1],
    },
    pink: {
      light: [1],
      dark: [1],
    },
    brown: {
      light: [1],
      dark: [1],
    },
    label: {
      light: [1, 2, 3, 4],
      dark: [1, 2, 3, 4],
    },
    fill: {
      light: [1, 2, 3, 4],
      dark: [1, 2, 3, 4],
    },
    placeholder: {
      light: [1],
      dark: [1],
    },
    text: {
      light: [1],
      dark: [1],
    },
    background: {
      light: [1, 2, 3],
      dark: [1, 2, 3],
    },
    contentBackground: [1, 2, 3],
    separator: {
      light: [1, 2],
      dark: [1, 2],
    },
    link: {
      light: [1, 2],
      dark: [1, 2],
    },
  },

  backgroundColor: colorsTheme,
};

export { theme };
