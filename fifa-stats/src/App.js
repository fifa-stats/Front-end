import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute'
import User from './components/User/User';
import NavBar from './components/NavBar/NavBar';
import CustomTeamContainer from './components/TeamTable/CustomTeamContainer';
import DefaultTeamContainer from './components/TeamTable/DefaultTeamContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar/>
          <Switch> {/* Visit https://reacttraining.com/react-router/web/api/Switch for more info */}
            <Route path="/team/default/:teamName" component={DefaultTeamContainer} />
            <Route path="/team/custom/:teamID" component={CustomTeamContainer} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Signup} />
            <PrivateRoute exact path="/user" component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
