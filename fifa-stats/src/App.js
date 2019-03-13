import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import User from './components/User/User'
import TeamTableContainer from './components/TeamTable/TeamTableContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          {/* the route below is temporary, just so I can test it for now */}
          <Route exact path="/" component={TeamTableContainer} />
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/user" component={User}/>
        </header>
      </Router>
    );
  }
}

export default App;
