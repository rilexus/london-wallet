import { css } from 'styled-components';
import { backgroundColor } from './background-color.theme';
import { primaryColor, secondaryColor } from '../colors';

const bgCurrent = css`
  background-color: ${backgroundColor('current')};
`;

const bgTransparent = css`
  background-color: ${backgroundColor('transparent')};
`;

const bgGray950 = css`
  background-color: ${backgroundColor('gray.950')};
`;

const bgPrimary = css`
  background-color: ${primaryColor};
`;

const bgSecondary = css`
  background-color: ${secondaryColor};
`;

export { bgCurrent, bgTransparent, bgGray950, bgPrimary, bgSecondary };
