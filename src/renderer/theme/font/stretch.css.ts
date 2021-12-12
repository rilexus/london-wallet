// font-stretch:
// * ultra-condensed
// * extra-condensed
// * condensed
// * semi-condensed
// * normal
// * inherit;
// * initial
// * semi-expanded
// * expanded
// * extra-expanded
// * ultra-expanded

import { css } from 'styled-components';

// EXTENDED
const stretchExtendedCss = css`
  font-stretch: expanded;
`;

const stretchExtraExtendedCss = css`
  font-stretch: extra-expanded;
`;

const stretchUltraExtendedCss = css`
  font-stretch: ultra-expanded;
`;

// NORMAL
const stretchNormalCss = css`
  font-stretch: normal;
`;

const stretchInheritCss = css`
  font-stretch: inherit;
`;

const stretchInitialCss = css`
  font-stretch: initial;
`;

// CONDENSED
const stretchExtraCondensedCss = css`
  font-stretch: extra-condensed;
`;
const stretchCondensedCss = css`
  font-stretch: condensed;
`;
const stretchUltraCondensedCss = css`
  font-stretch: ultra-condensed;
`;

const stretchSemiCondensedCss = css`
  font-stretch: semi-condensed;
`;

export {
  stretchCondensedCss,
  stretchExtendedCss,
  stretchExtraCondensedCss,
  stretchExtraExtendedCss,
  stretchInheritCss,
  stretchInitialCss,
  stretchNormalCss,
  stretchSemiCondensedCss,
  stretchUltraCondensedCss,
  stretchUltraExtendedCss,
};
