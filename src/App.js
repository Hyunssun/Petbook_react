import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './routes/Main';
import Home from './routes/Home';
import Calendar from './routes/Calendar';
import Stopwatch from './routes/Stopwatch';

const BaseRouter = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname === '/' ||
      location.pathname === '/petbook_react' ? null : (
        <Navbar />
      )}
      <Route path={['/', '/petbook_react']} exact={true} component={Main} />
      <Route path="/home" component={Home} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/stopwatch" component={Stopwatch} />
    </div>
  );
});

function App() {
  return (
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  );
}

export default App;
