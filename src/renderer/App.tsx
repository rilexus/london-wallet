import { FC } from 'react';
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, ImportWallet } from './views';
import { ThemeProvider } from './theme';
import { WalletProvider } from './libs/wallet';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Link to="/import">Import</Link>
        <Switch>
          <Route path="/import" component={ImportWallet} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
