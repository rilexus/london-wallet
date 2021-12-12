import { css } from 'styled-components';
import { backdrop } from '../../../backdrop';

const normalBackdropBackgroundStyledCss = css`
  backdrop-filter: brightness(${backdrop('brightness.50')})
    blur(${backdrop('blur.basis')});
`;

export { normalBackdropBackgroundStyledCss };
