import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Layout/Home'
import JobList from './components/job/joblist'
import JobAddOrEdit from './components/job/JobAddOrEdit'
import JobApplyOrEditApplication from './components/job/JobApplyOrEditApplication'

class App extends Component {

  render () {
    return (
      <div>
      <Router>
          <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/jobs' exact={true} component={JobList}/>
          <Route path='/jobs/:id' component={JobAddOrEdit} />
          <Route path='/jobs/:JobSeeker' component={JobApplyOrEditApplication} />
          </Switch>
        </Router>
      </div>
 );
    }
}

export default App;
