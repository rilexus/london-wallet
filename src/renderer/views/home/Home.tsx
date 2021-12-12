import { FC } from 'react';
import styled from 'styled-components';
import { CoinList } from './component';

const StyledScreenPadding = styled.div`
  padding: 0 1rem;
`;

const ScreenPadding: FC = ({ children }) => {
  return <StyledScreenPadding>{children}</StyledScreenPadding>;
};

const Home: FC = () => {
  return (
    <ScreenPadding>
      <CoinList />
    </ScreenPadding>
  );
};

export { Home };
