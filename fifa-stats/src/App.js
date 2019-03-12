import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PlayerView from './components/PlayerView/PlayerView';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          
          </header>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/player/:id" component={PlayerView} />
        </div>
      </Router>
    );
  }
}

export default App;
