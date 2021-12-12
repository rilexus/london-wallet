import { css } from 'styled-components';
import { colors } from '../utils';

const primaryColor = ({ theme }) => {
  const { mode } = theme.colors;
  return colors(`primary.${mode}`)({ theme });
};

const secondaryColor = ({ theme }) => {
  const { mode } = theme.colors;
  return colors(`secondary.${mode}`)({ theme });
};

const errorColor = ({ theme }) => {
  const { mode } = theme.colors;
  return colors(`error.${mode}`)({ theme });
};

const warningColor = ({ theme }) => {
  const { mode } = theme.colors;
  return colors(`warning.${mode}`)({ theme });
};

const infoColor = ({ theme }) => {
  const { mode } = theme.colors;
  return colors(`info.${mode}`)({ theme });
};

const primaryContrastText = ({ theme }) => {
  return colors(`primary.contrastText`)({ theme });
};

const secondaryContrastText = ({ theme }) => {
  return colors(`secondary.contrastText`)({ theme });
};

const primaryColorCSS = css`
  color: ${primaryColor};
`;

const primaryContrastTextCSS = css`
  color: ${primaryContrastText};
`;

const secondaryContrastTextCSS = css`
  color: ${secondaryContrastText};
`;

const secondaryColorCSS = css`
  color: ${secondaryColor};
`;

const errorColorCSS = css`
  color: ${errorColor};
`;

const warningColorCSS = css`
  color: ${warningColor};
`;

const infoColorCSS = css`
  color: ${infoColor};
`;

const primaryMainCSS = css`
  color: ${colors('primary.main')};
`;
const primaryLightCSS = css`
  color: ${colors('primary.light')};
`;
const primaryDarkCSS = css`
  color: ${colors('primary.dark')};
`;

export {
  primaryDarkCSS,
  primaryLightCSS,
  primaryMainCSS,
  primaryColorCSS,
  secondaryColorCSS,
  errorColorCSS,
  warningColorCSS,
  infoColorCSS,
  primaryContrastTextCSS,
  secondaryContrastTextCSS,
  primaryColor,
  secondaryColor,
};
