import { css } from 'styled-components';
import { boxShadow } from '../boxShadow.theme';

const shadowSm = css`
  box-shadow: ${boxShadow('sm')};
`;
const shadow = css`
  box-shadow: ${boxShadow('basis')};
`;
const shadowMd = css`
  box-shadow: ${boxShadow('md')};
`;
const shadowLg = css`
  box-shadow: ${boxShadow('lg')};
`;
const shadowXl = css`
  box-shadow: ${boxShadow('xl')};
`;
const shadow2Xl = css`
  box-shadow: ${boxShadow('2xl')};
`;
export { shadowSm, shadow, shadowMd, shadowLg, shadowXl, shadow2Xl };
