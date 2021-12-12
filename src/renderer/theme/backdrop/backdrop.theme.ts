import { accessTheme } from '../utils';

const backdropTheme = {
  brightness: {
    '0': 0,
    '50': 0.5,
    '75': 0.75,
    '90': 0.9,
    '95': 0.95,
    '100': 1,
    '105': 1.05,
    '110': 1.1,
    '125': 1.25,
    '150': 1.5,
    '200': 2,
  },
  blur: {
    none: '0',
    sm: '4px',
    basis: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
};

const backdrop = (path: string) => accessTheme(path, 'backdrop');
export { backdropTheme, backdrop };
