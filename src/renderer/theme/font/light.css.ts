import { css } from 'styled-components';
import { font } from './font.theme';
import { italicCss } from './italic.css';
import { stretchCondensedCss } from './stretch.css';

/*
--- LIGHT ---
* extraLight
* light
* ultraLight

* ultraLightItalic
* lightItalic
* extraLightItalic

* condensedLight
* compressedUltraLight
*/

const fontLightCSS = css`
  font-weight: ${font('weight.light')};
`;
const fontExtraLightCSS = css`
  font-weight: ${font('weight.extralight')};
`;
const fontUltraLightCSS = css`
  font-weight: ${font('weight.ultralight')};
`;

// Italic
const fontLightItalicCSS = css`
  ${fontLightCSS};
  ${italicCss};
`;

const fontUltraLightItalicCSS = css`
  ${fontUltraLightCSS};
  ${italicCss};
`;

const fontExtraLightItalicCSS = css`
  ${fontExtraLightCSS};
  ${italicCss};
`;

// CONDENSED
const fontCondensedLightCSS = css`
  ${fontLightCSS};
  ${stretchCondensedCss};
`;
const fontCondensedUltraLightCSS = css`
  ${fontUltraLightCSS};
  ${stretchCondensedCss};
`;

export {
  fontUltraLightCSS,
  fontExtraLightCSS,
  fontCondensedLightCSS,
  fontLightCSS,
  fontCondensedUltraLightCSS,
  fontExtraLightItalicCSS,
  fontUltraLightItalicCSS,
  fontLightItalicCSS,
};
