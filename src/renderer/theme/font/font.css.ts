import { css } from 'styled-components';
import { font } from './font.theme';

const fontSansCss = css`
  font-family: ${font('family.sans')};
`;

const fontSerifCss = css`
  font-family: ${font('family.serif')};
`;

const fontMonoCss = css`
  font-family: ${font('family.mono')};
`;

export { fontSansCss, fontSerifCss, fontMonoCss };
