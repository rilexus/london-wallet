import { css } from 'styled-components';
import { colors } from '../utils';

const colorSecondaryMain = css`
  color: ${colors('secondary.main')};
`;
const colorSecondaryDark = css`
  color: ${colors('secondary.dark')};
`;
const colorSecondaryLight = css`
  color: ${colors('secondary.light')};
`;
const colorSecondaryContrastText = css`
  color: ${colors('secondary.contrastText')};
`;

export {
  colorSecondaryMain,
  colorSecondaryLight,
  colorSecondaryDark,
  colorSecondaryContrastText,
};
