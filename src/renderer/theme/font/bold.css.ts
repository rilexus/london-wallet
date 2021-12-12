/*
 * --- BOLD ---
 * bold
 * extraBold
 * semiBold
 * boldItalic
 * extraBoldItalic
 * semiBoldItalic
 * condensedBold
 * compressedBold
 * */

import { css } from 'styled-components';
import { font } from './font.theme';
import { italicCss } from './italic.css';
import { stretchCondensedCss } from './stretch.css';

const fontBoldCss = css`
  font-weight: ${font('weight.bold')};
`;

const fontExtraBoldCss = css`
  font-weight: ${font('weight.extrabold')};
`;

const fontSemiBoldCss = css`
  font-weight: ${font('weight.semibold')};
`;

const fontBoldItalicCss = css`
  ${fontBoldCss};
  ${italicCss};
`;
const fontExtraBoldItalicCss = css`
  ${fontExtraBoldCss};
  ${italicCss};
`;

const fontSemiBoldItalicCss = css`
  ${fontSemiBoldCss};
  ${italicCss};
`;
const fontCondensedBoldCss = css`
  ${fontBoldCss};
  ${stretchCondensedCss};
`;

const fontCompressedBoldCss = css`
  ${fontBoldCss};
  ${stretchCondensedCss};
`;
export {
  fontSemiBoldCss,
  fontExtraBoldCss,
  fontBoldCss,
  fontCondensedBoldCss,
  fontBoldItalicCss,
  fontCompressedBoldCss,
  fontExtraBoldItalicCss,
  fontSemiBoldItalicCss,
};
