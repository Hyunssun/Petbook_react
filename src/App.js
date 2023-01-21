import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './routes/Main';
import Home from './routes/Home';
import Calendar from './routes/Calendar';
import Stopwatch from './routes/Stopwatch';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Calendar">
          <Calendar />
        </Route>
        <Route path="/Stopwatch">
          <Stopwatch />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
