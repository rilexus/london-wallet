/*
  fontBoldCss
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
import { fontBoldCss } from '../font';
import {
  text2XLCss,
  text3XLCss,
  textBaseCss,
  textLGCss,
  textSMCss,
  textXLCss,
  textXSCss,
} from '../text';

const typographyBoldXS = css`
  ${fontBoldCss};
  ${textXSCss};
`;

const typographyBoldSM = css`
  ${fontBoldCss};
  ${textSMCss};
`;

const typographyBoldBase = css`
  ${fontBoldCss};
  ${textBaseCss};
`;
const typographyBoldLG = css`
  ${fontBoldCss};
  ${textLGCss};
`;
const typographyBoldXL = css`
  ${fontBoldCss};
  ${textXLCss};
`;
const typographyBold2XL = css`
  ${fontBoldCss};
  ${text2XLCss};
`;
const typographyBold3XL = css`
  ${fontBoldCss};
  ${text3XLCss};
`;
export {
  typographyBold2XL,
  typographyBold3XL,
  typographyBoldBase,
  typographyBoldLG,
  typographyBoldSM,
  typographyBoldXL,
  typographyBoldXS,
};
