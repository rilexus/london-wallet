/*
  fontNormalCss
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
import { fontNormalCss } from '../font';
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
import { colorGray500 } from '../colors';

const typographyNormalBase = css`
  ${fontNormalCss};
  ${textBaseCss};
`;

const typographyNormalXS = css`
  ${fontNormalCss};
  ${textXSCss};
`;
const typographyNormalSM = css`
  ${fontNormalCss};
  ${textSMCss};
`;
const typographyNormalLG = css`
  ${fontNormalCss};
  ${textLGCss};
`;

const typographyNormalXL = css`
  ${fontNormalCss};
  ${textXLCss};
`;

const typographyNormal2XL = css`
  ${fontNormalCss};
  ${text2XLCss};
`;

const typographyNormal3XL = css`
  ${fontNormalCss};
  ${text3XLCss};
`;

const typographyNormal4XL = css`
  ${fontNormalCss};
  ${text4XLCss};
`;

// ------------ COLOR ------------//
const typographyNormalBaseGrey500 = css`
  ${typographyNormalBase};
  ${colorGray500};
`;

export {
  typographyNormal2XL,
  typographyNormal3XL,
  typographyNormal4XL,
  typographyNormalBase,
  typographyNormalLG,
  typographyNormalSM,
  typographyNormalXL,
  typographyNormalXS,
  // COLORS
  typographyNormalBaseGrey500,
};
