import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Hello } from './views';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
