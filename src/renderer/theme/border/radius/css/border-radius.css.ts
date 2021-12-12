import { css } from 'styled-components';
import { border } from '../../border.theme';

const roundedNone = css`
  border-radius: ${border('radius.none')};
`;

const roundedSm = css`
  border-radius: ${border('radius.sm')};
`;

const rounded = css`
  border-radius: ${border('radius.basis')};
`;
const roundedMd = css`
  border-radius: ${border('radius.md')};
`;
const roundedLg = css`
  border-radius: ${border('radius.lg')};
`;
const roundedXl = css`
  border-radius: ${border('radius.xl')};
`;
const rounded2Xl = css`
  border-radius: ${border('radius.2xl')};
`;
const rounded3Xl = css`
  border-radius: ${border('radius.3xl')};
`;
export {
  roundedNone,
  roundedSm,
  rounded,
  roundedMd,
  roundedLg,
  roundedXl,
  rounded2Xl,
  rounded3Xl,
};
