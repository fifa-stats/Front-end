import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import PlayerView from './components/PlayerView/PlayerView';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
          <Route path="/player/:id" component={PlayerView} />
        </div>
      </Router>
    );
  }
}

export default App;
