import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Header from './components/Header';
import MyTasks from './components/MyTasks';
import MyTeamTasks from './components/MyTeamTasks';

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Redirect exact from="/home" to="/home/mytasks" />  
       <Route exact path="/home/:page?" render={props => <Home {...props} />} />  

        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
