import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './routes/Main';
import Home from './routes/Home';
import Stopwatch from './routes/Stopwatch';
import DatePicker from './routes/Calendar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Calendar">
          <DatePicker />
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
