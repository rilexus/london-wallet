import { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { useCSSStyle } from '../../hooks';
import { flexCSS } from '../../../theme';

const StyledFlex = styled.div`
  ${flexCSS};
`;

const Flex: FC<{
  style?: CSSProperties;
  justifyContent?: 'unset' | 'center' | 'space-between';
  alignItems?: 'center' | 'unset';
}> = ({ children, justifyContent = 'unset', alignItems = 'unset', style }) => {
  const memoStyle = useCSSStyle({ ...style, justifyContent, alignItems }, [
    justifyContent,
    alignItems,
    style,
  ]);

  return <StyledFlex style={memoStyle}>{children}</StyledFlex>;
};

export { Flex };
