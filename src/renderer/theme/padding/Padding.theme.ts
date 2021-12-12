import { css } from 'styled-components';
import { accessTheme } from '../utils';
import { PaddingThemeType } from './PaddingTheme.type';

const paddingTheme: PaddingThemeType = {
  '0': '0px',
  '1': '1px',
  '12': '0.125rem',
  '25': '0.25rem',
  '37': '0.375rem',
  '50': '0.5rem',
  '62': '0.625rem',
  '75': '0.75rem',
  '87': '0.875rem',
  '100': '1rem',
  '125': '1.25rem',
  '150': '1.5rem',
  '175': '1.75rem',
  '200': '2rem',
  '225': '2.25rem',
  '250': '2.5rem',
  '275': '2.75rem',
  '300': '3rem',
};

const padding = (path: string) => accessTheme(path, 'padding');

const p0 = css`
  padding: ${padding('0')};
`;

const p1 = css`
  padding: ${padding('1')};
`;
const p12 = css`
  padding: ${padding('12')};
`;

const p25 = css`
  padding: ${padding('25')};
`;
const p37 = css`
  padding: ${padding('37')};
`;

const p50 = css`
  padding: ${padding('50')};
`;

const p62 = css`
  padding: ${padding('62')};
`;

const p100 = css`
  padding: ${padding('100')};
`;

// padding-top-bottom
const py100 = css`
  padding-top: ${padding('100')};
  padding-bottom: ${padding('100')};
`;

export {
  paddingTheme,
  padding,
  p0,
  p1,
  p12,
  p37,
  p25,
  p62,
  p50,
  p100,
  // padding top-bottom
  py100,
};
