import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Form from './pages/form';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      

        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/form' exact component={Form} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
