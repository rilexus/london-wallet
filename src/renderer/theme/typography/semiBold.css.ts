/*
  fontBoldCss,
  fontSemiBoldCss,
  fontExtraBoldCss,
  fontCondensedBoldCss,
  fontBoldItalicCss,
  fontCompressedBoldCss,
  fontExtraBoldItalicCss,
  fontSemiBoldItalicCss,
* */

/*
* textXSCss,
  textSMCss,
  textBaseCss,
  textLGCss,
  textXLCss,
  text2XLCss,
  text3XLCss,
  text4XLCss,
  text5XLCss,
* */

import { css } from 'styled-components';
import { fontSemiBoldCss } from '../font';
import {
  text2XLCss,
  text3XLCss,
  text4XLCss,
  textBaseCss,
  textLGCss,
  textSMCss,
  textXLCss,
  textXSCss,
} from '../text';

const typographySemiBoldXS = css`
  ${fontSemiBoldCss};
  ${textXSCss};
`;
const typographySemiBoldSM = css`
  ${fontSemiBoldCss};
  ${textSMCss};
`;
const typographySemiBoldBase = css`
  ${fontSemiBoldCss};
  ${textBaseCss};
`;
const typographySemiBoldLG = css`
  ${fontSemiBoldCss};
  ${textLGCss};
`;
const typographySemiBoldXL = css`
  ${fontSemiBoldCss};
  ${textXLCss};
`;
const typographySemiBold2XL = css`
  ${fontSemiBoldCss};
  ${text2XLCss};
`;
const typographySemiBold3XL = css`
  ${fontSemiBoldCss};
  ${text3XLCss};
`;
const typographySemiBold4XL = css`
  ${fontSemiBoldCss};
  ${text4XLCss};
`;

export {
  typographySemiBold2XL,
  typographySemiBold3XL,
  typographySemiBold4XL,
  typographySemiBoldBase,
  typographySemiBoldLG,
  typographySemiBoldSM,
  typographySemiBoldXL,
  typographySemiBoldXS,
};
