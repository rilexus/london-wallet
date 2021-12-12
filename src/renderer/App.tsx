import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Hello, Home } from './views';
import { ThemeProvider } from './theme';

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
