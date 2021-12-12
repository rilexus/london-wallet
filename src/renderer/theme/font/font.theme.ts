import { accessTheme } from '../utils';

const fontTheme = {
  antialiased: 'antialiased',
  italic: 'italic',
  notItalic: 'normal',
  family: {
    sans: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
    mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  weight: {
    // thin
    thin: 100,

    // light
    ultralight: 100,
    extralight: 200,
    light: 300,

    // normal
    normal: 400,

    // medium
    medium: 500,

    // bold
    semibold: 600,
    bold: 700,
    extrabold: 800,

    // black
    black: 900,
  },
};

const font = (path: string) => accessTheme(path, 'font');

export { font, fontTheme };
