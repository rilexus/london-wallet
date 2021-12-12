/*
 * --- THIN ---
 * thin
 * thinItalic
 * compressedThin
 * condensedThin
 * */
import { css } from 'styled-components';
import { font } from './font.theme';
import { italicCss } from './italic.css';
import { stretchCondensedCss, stretchExtraCondensedCss } from './stretch.css';

const fontThinCss = css`
  font-weight: ${font('weight.thin')};
`;

const fontThinItalicCss = css`
  ${fontThinCss};
  ${italicCss};
`;

const fontCondensedThinCss = css`
  ${fontThinCss};
  ${stretchCondensedCss};
`;

const fontExtraCompressedThinCss = css`
  ${fontThinCss};
  ${stretchExtraCondensedCss};
`;
export {
  fontExtraCompressedThinCss,
  fontCondensedThinCss,
  fontThinCss,
  fontThinItalicCss,
};
